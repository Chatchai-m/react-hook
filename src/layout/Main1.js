import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Main1() {
  return (
    <React.Fragment>
      <div style={{ padding:"10px" }}>
        Main1 <br/>
        <Outlet />
      </div>

    </React.Fragment>
  )
}