import React from 'react';


const First=()=>{
  const page={
       height:"500px",
       width:"500px",
       border:"1px solid black",
  }
  const pageone={
    height:"100px",
    width:"499px",
    border:"1px solid black",
    backgroundColor:"aqua",
}
const pagetwo={
  height:"295px",
  width:"499px",
  border:"1px solid black",
}
const pagethree={
  height:"100px",
  width:"499px",
  border:"1px solid black",
  backgroundColor:"aquamarine",
}
const twoone={
  height:"294px",
  width:"100px",
  border:"1px solid black",
  float:"left",
  backgroundColor:"grey",
}
const twotwo={
  height:"294px",
  width:"293px",
  border:"1px solid black",
  float:"left",
}
const twothree={
  height:"294px",
  width:"100px",
  border:"1px solid black",
  float:"left",
  backgroundColor:"yellow",
}
const mystyle={
  textAlign:"center",
}
const area={
  textAlign:"center",
  marginTop:"100px",
}
      return(
        <div style={page}>
          <div style={pageone}>
            <h2 style={mystyle}>header</h2>
          </div>
          <div style={pagetwo}>
            <div style={twoone}>
              <h2 style={area}>left</h2>
            </div>
            <div style={twotwo}>
            <h2 style={area}>body</h2>
            </div>
            <div style={twothree}>
            <h2 style={area}>right</h2>
            </div>
          </div>
          <div style={pagethree}>
            <h2 style={mystyle}>footer</h2>
          </div>
        </div>
      )
    }

  export default First;
  