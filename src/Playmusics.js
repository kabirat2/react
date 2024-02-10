
import React, { useEffect ,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Playmusics = () => {
    const{id} = useParams()
    const[plays, setplays] = useState({})
    
    useEffect(() => {
        axios.get( `https://robo-music-api.onrender.com/music/my-api/${id}`)
        .then((res)=>{
            console.log(res.data.data);
            setplays(res.data.data)
        }).catch((error)=>{
            console.log(error);
        })

    }, [])
    

  return (
    <div className='btn btn-secondary w-100'>
   
               <div className="w-25 mx-auto ">
               <img src={plays[0].songImage}    alt="" />
                       <h1 >{plays[0].songTitle}</h1>
                       <h1>{plays[0].releaseDate}</h1>
                     
                       {/* <button className='btn btn-seconda' onClick={() => playmusic(el)}>showmore</button> */}
                       </div>
              
    </div>
  )
}

export default Playmusics

