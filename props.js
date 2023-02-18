import React from "react";


const First=(props)=>{
    return(
        <>
        <li>
            <span>Name:{props.name},Age:{props.age},Hobby:{props.children}</span>
            <button onClick={props.delEvent}>delete</button>
        </li>
        </>
    )
}
export default First;