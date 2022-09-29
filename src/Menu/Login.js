import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import React,{useEffect, useState} from 'react';
import axios from "axios";

function Login(props) {
  let navigate = useNavigate();

  const [loginmodule,setLoginmodule]=useState({
    login: "",
    password: ""
    
    
})

const{login,password}=loginmodule

const onInputChange=(e)=>{
  setLoginmodule({...loginmodule,[e.target.name]:e.target.value})
}

const onSubmit=async (e)=> {
    e.preventDefault();
    await axios.post("http://localhost:8080/loginmodule/add",loginmodule)
    navigate("")
};



  /*const[login,setLogin]=useState('') 
  const[password,setPassword]=useState('')
  const[loginmodules,setloginmodules]=useState([])*/
     /*var handleSubmit = function(e){
        e.preventDefault()
        var temp = {
            login : e.target.login.value,
            password : e.target.password.value,
            
        }
        console.log(temp)
        props.save(temp)
    }*/
      
    /*const handleClick=(e)=>{
      e.preventDefault()
      const loginmodule={login,password}
      console.log(loginmodule)
  
      fetch("http://localhost:8080/loginmodule/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(loginmodule)
  
      }).then(()=>{
        console.log("New login added")
      })  
    }

    useEffect(()=>{
      fetch("http://localhost:8080/loginmodule/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setloginmodules(result);
      
      }
    )
    },[])*/
    
  return (
    <div class = "login-box">
        <h2>Sign in</h2>
        <form onSubmit={(e)=>onSubmit(e)}/*onSubmit={handleSubmit} action="/AdminMenu" method="post"*/>
           <div class = "user-box">
             <input 
             type = "text" 
             name = "login" 
             value={login}
             onChange={(e)=>onInputChange(e)}
             /*onChange={(e)=>setLogin(e.target.value)}*//>
             <label>Username</label>
           </div>
           <div class = "user-box">
             <input 
             type = "password" 
             name = "password"
             value={password}
             onChange={(e)=>onInputChange(e)}
             /*onChange={(e)=>setPassword(e.target.value)}*//>
             <label>Password</label>
           </div>
           {/*<input type="submit" class="btn" href="/AdminMenu" value="Login"/>*/}
           <button class="btn"/*onClick={handleClick}/*{() => {navigate("/AdminMenu")}}*/>Login</button>
           {/*<a href="/AdminMenu" className="text-success" onClick={() => props.openLogin()}>login</a>*/}
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             
           
        </form>
        {/*{login}
        {password}*/}
        </div>
  )
}

export default Login
