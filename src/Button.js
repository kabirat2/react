import React from "react";

 const Button = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={()=>props.click(888)} className= {props.style} >{props.value}</button>
        </div>
    )
 }
  

 export default Button