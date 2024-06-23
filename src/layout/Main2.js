import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Main2() {
  return (
    <React.Fragment>
        Main2 <br/>
      <Outlet />
    </React.Fragment>
  )
}