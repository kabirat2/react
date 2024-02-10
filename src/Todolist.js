import React, { useState } from "react";
const  Todolist = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [alltodo, setalltodo] = useState([])
    const [todo, settodo] = useState({})
    const [index, setindex] = useState("")

    const saveall = () =>{
        let detail = {
            title,
            content
        }
        console.log(detail);
        setalltodo([...alltodo, detail])
    }
    const deletetodo =(i) =>{
      console.log(i);
      alltodo.splice(i, 1)
      setalltodo([...alltodo])
    }
    const edit = (i, el) =>{
      console.log(el, i);
      setindex(i)
      settodo({...el})
    }
    const handletitle = (e) =>{
        console.log(e.target.value)
        settodo({...todo, title:e.target.value})
     }
     const handlecontent = (e) =>{
        console.log(e.target.value)
        settodo({...todo, content:e.target.value})
     }
     const newtodo = () =>{
       console.log(index, todo);
       let update = [...alltodo]
       update[index] = todo
         console.log(update)
       setalltodo([...update])
       
     }
  return (
    <div>
        <div className='mx-auto w-50 form-group'>
            <input onChange={(e)=>settitle(e.target.value)} className='form-control mt-3' type="text" />
            <input onChange={(e)=>setcontent(e.target.value)} className='form-control mt-3' type="text" />
            <button className='btn btn-primary mt-3 mx-auto' onClick={saveall}>Save todo</button>
        </div>
        {alltodo.map((el,i)=>(
          <>
             <div className='d-flex justify-content-between align-items-center '>
                <h1>{el.title}</h1>
                <h1>{el.content}</h1>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success' onClick={()=>edit(i,el)}>edit</button>
                <button className='btn btn-danger' onClick={()=>deletetodo(i)}>&times;</button>
             </div>
          </>  
        ))

        }





<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <input value={todo.title} onChange={(e)=>handletitle(e)} className='form-control mt-3' type="text" />
          <input value={todo.content} onChange={(e)=>handlecontent(e)} className='form-control mt-3' type="text" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={newtodo} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}


  


export default Todolist