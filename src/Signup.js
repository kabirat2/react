import React,{useState, useEffect} from 'react'
// import image from "./home-img1.png"
const Signup=()=>{
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allusers, setallusers] = useState ([])
    const [handleemail, sethandleemail] = useState('')
     const [handlepassword, sethandlepassword] = useState('')
    const [LoggedInUser, setLoggedInUser] = useState([])
  const [showing, setshowing] = useState(false)

    useEffect(() => {
      const alluser = JSON.parse(localStorage.getItem('allusers')) || [];
      setallusers(alluser);
    }, []);
 
  
    
   
  
    const clicks = () =>{
      let users = {
        firstname,
        lastname,
        password,
        email
       }
       console.log(users);
       setallusers([...allusers, users])
      localStorage.setItem("allusers", JSON.stringify([...allusers, users]))
       setfirstname('')
       setlastname('')
       setemail('')
       setpassword('')
    }



    const Submits = () =>{
      const user = allusers.find(
          (user) => user.email === handleemail && user.password === handlepassword
        );
    try {
      
      if (!user) {
          alert("Login failed. Invalid email or password.")
          console.log("Login failed. Invalid email or password.");
          
        } else {
          setLoggedInUser([...LoggedInUser, user]);
          alert("Login successful!")
          console.log("Login successful!");
        }
    } catch (error) {
      console.error(error);
    }
       
    
        // Clear login form fields
        sethandleemail("");
        sethandlepassword("");
  }

  const showpassword = () =>{
  // {showing? setshowing(false) : setshowing(true)}
  setshowing(!showing)
  }

    return (
      <>
      <div>
        <div className="container d-flex align-items-center justify-content-center flex-column w-50 mt-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      
       
      <h2>Signup Form</h2>
        <form  className="col-10 col-md-8 col-lg-6 mx-auto my-5 p-3" >
        <input className='form-control w-100 my-2' placeholder='firstname' onChange={(e)=>setfirstname(e.target.value)} type="text" required />
        <input className='form-control w-100 my-2' placeholder='lastname' onChange={(e)=>setlastname(e.target.value)} type="text" required/>  
        <input className='form-control w-100 my-2' placeholder='email' onChange={(e)=>setemail(e.target.value)} type="text" required />  

        <div className="form-controlw-100my-2 shadow">
        <input placeholder='password' onChange={(e)=>setpassword(e.target.value)} type={showing? 'password' : 'text'} required/>  
          <button onClick={showpassword}>{showing? 'hide' : 'show'}</button>
        </div>
        <button onClick={clicks} className="btn btn-primary ">click me</button>
        </form>
        </div>
        </div>



<div className="container w-50 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded d-flex align-items-center justify-content-center flex-column">
<h2>Login Form</h2>
<form action=""> 

<div className="mb-3">
  <label htmlFor="lastName" className="form-label">
   Email Address
  </label>
  <input type="email"className="form-control  w-100 my-2"onChange={(e)=> sethandleemail(e.target.value)} required/>
</div>

<div className="mb-3">
  <label htmlFor="email" className="form-label">
    Password
  </label>
  <div>
  
  <input type={showing? 'password' : 'text'} className="form-control  w-100 my-2"onChange={(e)=> sethandlepassword(e.target.value)}required/>
  <button onClick={showpassword}>{showing? 'hide' : 'show'}</button>
      </div>
</div>

<button  onClick={Submits} type="submit" className="btn btn-primary">
  Sign Up
</button>
</form>
</div>
</>
    )
}

export default Signup