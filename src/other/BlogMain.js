import React, {useEffect, useMemo, useRef, useState} from 'react';
import axios from "axios";
import { Button, Col, Row } from 'react-bootstrap';
import UpdateBlogMain from './UpdateBlogMain';
import AppCustom from "../assets/js/AppCustom";

export default function BlogMain() {
    const [blogData, setBlogData] = useState([]);

    const loadData = () => {
        let formData = new FormData();
        formData.append("id", "");
        
        axios({
            method: 'post',
            url: '/api/Task/LoadBlog',
            data: formData
        })
        .then(function (response) {
            let resp = response.data;
            // console.warn(resp.data.blogs);
            setBlogData(resp.data.blogs);
        })
        .catch(AppCustom.AxiosResponseError);

    }

    useEffect(() => {
        loadData();
    }, []);

    const visibleTodos = useMemo(
        () => {

        },
        []
    );
    return (
        <div>
            {/* <h1 className='mb-4'>Child test1</h1> */}
            <br/>

            <div className='row mb-2 mt-2'>
                <div className='col-4 text-end'></div>
                <div className='col-4'>
                </div>
                <div className='col-2 text-end'>
                    <UpdateBlogMain blog_id={0} funcLoad={loadData} ></UpdateBlogMain>
                </div>
            </div>
            

            <Row>
                <Col className='col-8 offset-2'>
                { 
                    blogData.map( (item, index)=>{
                        return (
                            <div key={index} className='row mb-1'>
                                <div className='col-8'>
                                    <b>id:</b> {item.id}, <b>name:</b> {item.name}, <b>author name:</b> {item.authorName}, <b>content:</b> {item.content} 
                                </div>
                                <div className='col-4 text-end'>
                                    {/*<button className={"btn btn-sm btn-warning"}>Edit</button>*/}
                                    <UpdateBlogMain blog_id={item.id} funcLoad={loadData}></UpdateBlogMain>
                                </div>
                            </div>
                        );
                    }) 
                }
                </Col>
            </Row>


        </div>
    )
}