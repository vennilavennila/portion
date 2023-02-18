import React from "react";
import College from "./props";


function Prop(){
    const data=[
        {id:'1',studentName:'vennila'}
    ]
    return(
        <div>
            <ul>
                <College student={data[1].studentName}/>
                <Prop/>
            </ul>
        </div>
    )
}

export default Prop;