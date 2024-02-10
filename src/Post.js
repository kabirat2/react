import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ()=> {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [image, setimage] = useState("")
    const [alluser, setalluser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get( "http://localhost:3002/post", {content,title,image})
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    
    }, [])
    
    const Postps =() =>{


        axios.post( "http://localhost:3002/post", {content,title,image})
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
        }).catch((error)=>{
            console.log(error);
        })


        axios.get( "http://localhost:3002/post", {content,title,image})
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    }
    const chooseing =(e) =>{
        const file = e.target.files[0]
        console.log(file);
        const reader =new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>{
            setimage(reader.result)
            console.log(reader.result);
        }
    }
    const showmore = (el) =>{
        const id = el.id
        navigate(`/spotify/${id}`)
    }

  return (
    <>
    <div>
      <div className="container d-flex align-items-center justify-content-center flex-column w-50 mt-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
    
     
    <h2>Signup Form</h2>
      <form  className="col-10 col-md-8 col-lg-6 mx-auto my-5 p-3" >
      <input className='form-control w-100 my-2' placeholder='content' onChange={(e)=>setcontent(e.target.value)} type="text" required />
      <input className='form-control w-100 my-2' placeholder='title' onChange={(e)=>settitle(e.target.value)} type="text" required/>  
      <input className='form-control w-100 my-2'  onChange={(e)=>chooseing(e)} type="file"  />  
      
      
      <button onClick={Postps} className="btn btn-primary ">click me</button>
      </form>
      </div>
      {
        alluser.map((el, id) => (
            <div className="w-50 mx-auto">
                <div key={id}>
                    <h1>{el.title}</h1>
                    <h1>{el.content}</h1>
                    <button onClick={()=>showmore(el)}> showmore</button>
                    {/* <img src={el.image} className='w-100' alt="" /> */}
                    </div>
            </div>
        ))
      }
      </div>
</> 
  )
}

export default Post