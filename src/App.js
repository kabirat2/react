// import logo from './logo.svg';
import './App.css';
// import TodoList from './components/TodoList';

import Home from './Home';
import Input from './Input';
import Todolist from './Todolist'
import Signup from './Signup'
import Navbar from './Navbar';
import Htp from './Htp'

const App = ()=>{
  const mystyle={
    header:{
      color:"white",
      background:"black"
    },
    nav:{
      color:"white",
      background:"black"
    }
  }
  return(
    <div>
      <h1 style={{color:"blue",background:"black"}}>app</h1>
      <p style={mystyle.header}>react class</p>
      <p style={mystyle.nav}>react</p>
     
   
      <Navbar/>
    <Home/>
    <Htp/>
  <Input/>
  <Todolist/>
  
    </div>

    
  )
}

export default App;
