import React from "react";
import Userone from "./userOne";


class Practical extends React.Component{
    constructor(){
      super();
      this.state={
        data:[
          {sno:"1",name:"rose",color:"red"},
          {sno:"2",name:"lotus",color:"pink"},
          {sno:"3",name:"sunflower",color:"yellow"},
          {sno:"4",name:"jasmine",color:"white"},
          {sno:"5",name:"hybishus",color:"red"}
        ]
      }
    }
    render(){
      return(
        <div>
          <ol style={{listStyleType:"none"}}>
            {
              this.state.data.map(
                (fn)=>{
                  return<Userone sno={fn.sno}flowerName={fn.name}flowerColor={fn.color}/>
                }
              )
            }
          </ol>
        </div>
      )
    }
  }
  
  
  export default Practical;
  