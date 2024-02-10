import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Music = () => {

    const [alluser, setalluser] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get( "https://robo-music-api.onrender.com/music/my-api")
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    

    
    }, [])
    
    const playmusic = (el) =>{
      const id = el.id
      console.log(el);
      
      navigate(`/playmusic/${id}`)
  }
  return (
    <div className='btn btn-secondary w-100'>
 {
        alluser.map((el, id) => (
            <div className="w-25 mx-auto ">
                <div key={id}>
                    <h1 >{el.songTitle}</h1>
                    <h1>{el.releaseDate}</h1>
                    <img src={el.songImage} className="rounded mx-auto d-block w-50 btn btn-secondary d-inline p-2 "   alt="" />
                    <button className='btn btn-seconda' onClick={() => playmusic(el)}>play now</button>
                    </div>
            </div>
        ))
      }
    </div>
  )
}

export default Music