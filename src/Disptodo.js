import React from "react";


const Disptodo =({alltodo}) =>{
    console.log(alltodo);
    return(
        <div>
        {
            alltodo.map((el)=>(
                <>
               <h1>{el}</h1>
                </>
            ))
        }
        </div>
    )
}
  


export default Disptodo