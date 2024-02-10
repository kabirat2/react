import Addtodos from "./Addtodos";
import React, {useState} from "react";
import Disptodo from './Disptodo'



const Navbar = () => {

    const [alltodo, setalltodo] = useState([])
    const addtodo = (newtodo ) => {
        console.log("working");
        setalltodo([...alltodo, newtodo])
        console.log(alltodo);
        
    }


    return(
        <>
        <div>navbar</div>
        {/* <div></div> */}
        <Addtodos click= {addtodo}/>
        <Disptodo alltodo={alltodo}/>
        </>
    )
}


export default Navbar