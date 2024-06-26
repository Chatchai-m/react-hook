import React, { useEffect } from "react";
import { useCallback, useState, memo } from "react";
import UseCallbackButton from "./UseCallbackButton";

const ABCD = memo(UseCallbackButton);

function UseCallbackMain(props) {
    const [count, setCount] = useState(0);
    const [objArr, setObjArr] = useState([]);
    const [input, setInput] = useState("");
    // const handleClick = () => {    
    //     setCount((c) => c + 1);  
    // };
    const handleClick = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const addObjArr = () => {
        let timestamp = new Date().getTime()
        setObjArr( (t)=> [ ...t, { timestamp: timestamp }] )
    }

    const delObjArr = (id) => {
        let index = objArr.findIndex( e => { return e.timestamp === id })
        objArr.splice(index, 1);
        setObjArr([...objArr])
    }

    const readCountVaraible = ((source) => {
        console.warn(source, count);
    });



    useEffect(() => {
        console.log("variable count was updated", count);
        // readCountVaraible("effect");
    }, [count]);

    useEffect(() => {
        if(objArr.length === 0)
        {
            return () => false;
        }
        console.log("variable objArr was updated", objArr);
        
    }, [objArr]);

    return (
        <>
            <h1>Test2 - UseCallbackMain</h1>
            <p>You clicked {count} times</p>
            <button onClick={(e) => {
                handleClick();
            } }>Click me</button>
            <br />
            <button onClick={ (e)=> {
                addObjArr();
            }}>Add Arr to Obj</button>
            <br />
            <br />
            {
                objArr.map(function(item, index){
                    return <div key={index}>{item.timestamp} | <button onClick={ (e)=> { delObjArr(item.timestamp);}}>-</button></div>
                })
            }
            <br></br>


            {/* <UseCallbackButton onClickCount={handleClick} /> */}
            {/* <ABCD onClickCount={handleClick} />     */}
        </>
    );
}

export default UseCallbackMain;