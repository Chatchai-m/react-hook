import React from "react";
export default function Test1({navigation}) {
    const openInNewTab = (url) => {
    };
    return (
        <div>
            <button
                onClick={() => {
                    // navigate(`/topic/${props.id}`,{state:{id:props.id}});
                }}
            >
                Visit
            </button>
        </div>
    )
}