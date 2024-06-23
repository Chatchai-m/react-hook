import React from "react";

const UseCallbackButton = (props) => 
{
    const {onClickCount} = props;
    console.log("render");  
    return <button onClick={onClickCount}>Click me</button>;
}

export default UseCallbackButton;