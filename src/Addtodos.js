import React, {useState} from "react";

const Addtodos = ({click}) => {
        const [newtodo, setnewtodo] = useState('')


    return( 
        <div>
          {/* <h1>ALL TODO</h1> */}
          <input onChange={(e)=> setnewtodo(e.target.value)} type="text" />  
          <button  onClick={() => click (newtodo)}>addtodo</button>
        </div>

    )
}

export default Addtodos