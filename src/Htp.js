
import React, {useEffect, useState} from "react";
import axios from "axios"
import Httpmethod from "./Httpmethod";


const Htp = () =>{
    const[data,setdata]=useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
         .then(data => console.log(data.product))

         axios.get('https://dummyjson.com/products')
         .then((res)=>{
            console.log(res.data.products);
            setdata(res.data.products)
            console.log(data);
         }).catch((err)=>{
            console.log(err);
         })
    }, [])
    

 return(
    <div>
      <Httpmethod data={data}/>
    </div>
 )
}


export default Htp