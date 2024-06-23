import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Main1() {
  return (
    <React.Fragment>
        Main1 <br/>
      <Outlet />
    </React.Fragment>
  )
}