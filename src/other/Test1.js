import React from "react";
export default function Test1({navigation})
{

    //Kong Ruksiam
    return (
        <>
            <div className={"mt-4"}>
                <button type="button"
                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white
                    bg-blue-700
                    rounded-lg
                    hover:bg-blue-800
                    focus:ring-4
                    focus:outline-none
                    focus:ring-blue-300
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    dark:focus:ring-blue-800"
                >
                    Extra small
                </button>
                <br/>
                <br/>
                <button className="btn btn-sm btn-warning">Extra small</button>
            </div>
        </>
    )
}