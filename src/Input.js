import React,{useState, useEffect} from 'react'
import Button from './Button'

const Input = () => {
    // let myname = "karleed"
    let gender = "male"
    const [myname, setmyname] = useState("karleed")
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [lists, setlists] = useState([])
    const [isloading, setisloading] = useState(false)
    const [count , setcount] = useState(0)
    const [calculate , setcalculate ] = useState(0)
   // {conditonal expression? "true" : "false"}
   const [allstudent, setallstudent] = useState([
    {firstname:"tola", lastname:"adesanya"},
    {firstname:"bola", lastname:"adesanya"},
    {firstname:"tomi", lastname:"adesanya"}
   ])
    useEffect(() => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
       .then(json => console.log(json))
    
      setTimeout(() => {
        setisloading(true)
     }, 5000);
     setcalculate(count + calculate)
      
    },[])

 let items = JSON.parse(localStorage.getItem("lists"))
 console.log(items);
  
    
   
  
    const save = () =>{
      let alllist = {
        title,
        content
       }
       console.log(alllist);
       setlists([...lists, alllist])
      localStorage.setItem("lists", JSON.stringify(lists))
       
    }

    const click = (i) =>{
      console.log(i);
      alert("it working")
    }

     const login =() =>{
      alert("the button is work")
     }
  return (
    <div>
      <h1>{gender == "male"? myname : ""}</h1> 
      {/* <button onClick={change}>change name</button>  */}
      <table className='table border'>
        <tr>
            <td>S/N</td>
            <td>FIRSTNAME</td>
            <td>LASTNAME</td>
        </tr>
        {! isloading ? <h1>...loading</h1> : allstudent.map((el, index) =>(
            <>
             <tr>
                <td>{index + 1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
             </tr>
            </>
        ))

        }
       </table>


       <div className='form-group w-50 mx-auto'>
       <input className='form-control mt-3' onChange={(e)=>settitle(e.target.value)} type="text" />
       <input className='form-control mt-3' onChange={(e)=>setcontent(e.target.value)} type="text" />  
       <button onClick={save}>Save</button>
       </div>
       <h1>{count}</h1>
       <h1>{calculate}</h1>

       
    <Button click={click} style="btn btn-success" value="signup"/>
    <Button click={login} style="btn btn-primary" value="click"/>
    <Button  style="btn btn-success" value="edit"/>
         
    </div>
  )
}

export default Input;