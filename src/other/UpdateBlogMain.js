import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import AppCustom from "../assets/js/AppCustom";

export default function UpdateBlogMain(props) {
	const blog_id = props.blog_id || 0;
	var btn_name = props.btn_name || "";
    if(btn_name === "")
    {
        btn_name = btn_name === "" && blog_id === 0 ? "Create": "Edit";
    }

    const [showModal, setShowModal] = useState(false);
	const [blogName, setBlogName] = useState("");
	const [authorName, setAuthorName] = useState("");
	const [content, setContent] = useState("");


    const readBlog = ()=>{
        setBlogName("");
        setAuthorName("");
        setContent("");
        if(blog_id !== 0)
        {
            let formData = new FormData();
            formData.append("id", blog_id);

            axios({
                method: 'post',
                url: '/api/Task/ReadBlog',
                data: formData
            })
            .then(function (response) {
                let resp = response.data;
                let blog = resp.data;
                setBlogName(blog.name || "");
                setAuthorName(blog.authorName || "");
                setContent(blog.content || "");
            })
            .catch(AppCustom.AxiosResponseError);

        }
        setShowModal(true);
    }

    const saveBlog = ()=>{
        let formData = new FormData();
        formData.append("id", blog_id);
        formData.append("name", blogName);
        formData.append("author_name", authorName);
        formData.append("content", content);

        axios({
            method: 'post',
            url: '/api/Task/SaveBlog',
            data: formData
        })
        .then(function (response) {
            setShowModal(false);
            if(props.funcLoad)
            {
                console.log("LoadBlog")
                props.funcLoad();
            }
        })
        .catch(AppCustom.AxiosResponseError);

    }

    return (<div>
        <Modal show={showModal} onHide={ (e)=> setShowModal(false)} backdrop="static" keyboard={false}  >
            <Modal.Header closeButton>
                <Modal.Title>{blog_id === 0 ? "Create" : "Edit"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-1">
                    <Col className="col-3"><b>Name: </b></Col>
                    <Col className=""><input type="text" className="form-control form-control-sm"  value={blogName} onChange={ (e)=> { setBlogName(e.target.value) }}  /></Col>
                </Row>
                <Row  className="mb-1">
                    <Col className="col-3"><b>Author: </b></Col>
                    <Col className=""><input type="text" className="form-control form-control-sm" value={authorName} onChange={ (e)=> { setAuthorName(e.target.value) }}  /></Col>
                </Row>
                <Row >
                    <Col className="col-3"><b>Content: </b></Col>
                    <Col className=""><textarea type="text" className="form-control form-control-sm" rows={3} value={content} onChange={ (e)=> { setContent(e.target.value) }} /></Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="btn-sm" onClick={ (e)=> saveBlog(false)}> Save Changes </Button>
                <Button variant="secondary" className="btn-sm" onClick={ (e)=> setShowModal(false)}> Close </Button>
            </Modal.Footer>
        </Modal>

        {blog_id === 0  ? <Button className="btn-sm" onClick={readBlog}>{btn_name}</Button> 
                        : <Button className="btn-sm btn-warning" onClick={readBlog}>{btn_name}</Button> }
        
    </div>);
}
