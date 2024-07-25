import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Main1() {

    const Logout = ()=>
    {
        localStorage.clear();
        window.location.href = "/";
    }
    return (
        <React.Fragment>
            <div style={{ padding:"10px" }}>
                Main1 - Menu: <NavLink to="/blog-main">Blog</NavLink> | <NavLink to="/useCallback">useCallback</NavLink> | <a href={"#"} onClick={Logout}>Logout</a>
                <Outlet />
            </div>
        </React.Fragment>
    )
}