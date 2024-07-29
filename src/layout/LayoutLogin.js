import React, {useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
import {Col} from "react-bootstrap";
import axios from "axios";

export default function LayoutLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Login = ()=>
    {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        axios({
            method: 'post',
            url: '/Login',
            data: formData
        })
        .then(function (response) {
            let data = response.data;
            console.warn(data);
            if(data.status)
            {
                localStorage.setItem('access_token', data.data.access_token);
                window.location.reload();
            }
            else
            {
                alert(data.message);
            }
        })
        .catch( function(error){
            console.error(error);
            console.error(error.response.data);
        });
    }

    return (
        <React.Fragment>
            <div className={"p-3"}>
                <div className={"row mb-1"}>
                    <Col className={"col-2"}>
                        <input
                            type={"text"} className={"form-control form-control-sm"}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Col>
                </div>
                <div className={"row mb-1"}>
                    <Col className={"col-2"}>
                        <input
                            type={"text"}
                            className={"form-control form-control-sm"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                </div>
                <div className={"row"}>
                    <Col className={"col-2 text-end"}>
                        <button className={"btn  btn-sm btn-secondary"} onClick={Login}>Login</button>
                    </Col>
                </div>
                <br/>
                <h1>ABCD</h1>
                <h1>ABCD</h1>
                
            
            </div>
        </React.Fragment>
    )
}