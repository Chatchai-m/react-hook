import React from "react";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

export default function Main1() {

    const Logout = ()=>
    {
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <React.Fragment>
            <div style={{ padding:"10px" }}>
                <NavLink to="/test1">Main1 - Menu</NavLink> |
                <NavLink to="/blog-main">Blog</NavLink> |
                <NavLink to="/useReducer">useReducer</NavLink> |
                <NavLink to="/useCallback">useCallback</NavLink> |
                <a href={"#"} onClick={Logout}>Logout</a>
                <Outlet />
            </div>
        </React.Fragment>
    )
}