import React, { useEffect ,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Spotify = () =>{
  
const{id} = useParams()
const[posts, setposts] = useState({})

useEffect(() => {
    axios.get( `http://localhost:3002/post/${id}`)
    .then((res)=>{
        console.log(res);
        setposts(res.data)
    }).catch((error)=>{
        console.log(error);
    })

}, [])

return(
    <>
    <div>
        <h1>{posts.content}</h1>
        <h1>{posts.title}</h1>
        <img src={posts.image} className='w-100' alt="" /> 
    </div>
    </>
)

}



export default Spotify