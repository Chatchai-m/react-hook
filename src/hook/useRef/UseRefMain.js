import React, {useEffect, useRef} from "react";
import { useCallback, useState, memo } from "react";


function UseRefMain(props)
{
    const [textState, setInputState] = useState("");
    const [textState2, setInputState2] = useState(0);
    const inputRef = useRef(0);
    
    return (
        <>
            <h3>UseState</h3>
            textState: {textState}<br/>
            <input type="text" value={textState}
                onChange={ (e)=> {
                    setInputState(e.target.value);
                    console.warn("textState => ", textState)
                }
            }/>
            <br/>

            <h3>UseRef</h3>
            inputRef: {inputRef.current}<br/>
            textState2: {textState2}<br/>
            <button type={"button"}
                onClick={ (e)=>{
                    setInputState2( textState2 => textState2 + 1);
                    console.warn(textState2)
                    setInputState2( textState2 => textState2 + 1);
                    console.warn(textState2)
                    setInputState2( textState2 => textState2 + 1);
                    console.warn(textState2)
                }
            }>Add use ref</button>
            
        </>
    );
}

export default UseRefMain;