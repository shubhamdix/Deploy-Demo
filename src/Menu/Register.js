import './Register.css'
import './script'
import { Link, useNavigate } from "react-router-dom"
import React,{useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useFormik } from "formik";
import { signUpSchema } from '../schemas';



const Register = (props) =>  {
    
     /*const initialValues = {
        name: "",
        email: "",
        username: "",
        password: "",
        confirm: "",
    }


    const {values, er̥rors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,

        onSubmit : (valu̥es, action) => {
            
            console.log("🚀 ~ file: Register.js ~ line 11 ~ Register ~ valu̥es", valu̥es)
            action.resetForm();  
            
        }
    })
    console.log("🚀 ~ file: Register.js ~ line 25 ~ Register ~ er̥rors", er̥rors)*/
    
    let navigate=useNavigate()

    const [registermodule,setRegistermodule]=useState({
        name: "", 
        email: "", 
        username: "",
        password: "", 
        confirm: "", 
        
    })

    const{name,email,username,password,confirm}=registermodule

    const onInputChange=(e,)=>{
        setRegistermodule({...registermodule,[e.target.name]:e.target.value})
        
    }
    
    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8080/registermodule/add",registermodule)
        navigate("/log")
        console.log(registermodule)
        
        
    };
    

    /*let navigate = useNavigate();*/
    /*const[name,setName]=useState('') 
    const[email,setEmail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[confirm,setConfirm]=useState('')
    const[registermodules,setregistermodules]=useState([])*/


    
    



    /*var handleSubmit = function(e){
        e.preventDefault()
        var temp = {
            name : e.target.name.value,
            email : e.target.email.value,
            username : e.target.username.value,
            password : e.target.password.value,
            confirm : e.target.confirm.value
        }
        console.log(temp)
        props.save(temp)
    }*/
    
    /*const handleClick=(e)=>{
        e.preventDefault()
        const registermodule={name,email,username,password,confirm}
        console.log(registermodule)
    
        fetch("http://localhost:8080/registermodule/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(registermodule)
    
        }).then(()=>{
          console.log("New register added")
        })  
      }
  
      useEffect(()=>{
        fetch("http://localhost:8080/registermodule/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setregistermodules(result);
        
        }
      )
      },[])*/

  return (
       
    <div class="container">
    <div class="row justify-content-center">
                        <div class="col-md-15">
                            <div class="register-box">
    
                                    <form onSubmit={(e)=>onSubmit(e)} /*onClick={handleClick}/*onSubmit={handleSubmit} class="form-horizontal" method="post" action="#"*/>
                                        <table align='center'>
                                            <tr>
                                                <td colSpan="2"><center><h4>Create Account</h4></center></td>
                                            </tr><br/>
                                            <tr>
                                                <td><h5>Your Name </h5></td>    
                                                <td><input 
                                                type="text" 
                                                class="form-control is-valid"
                                                name="name"  
                                                placeholder="Enter your Name" 
                                                value={name}
                                                /*onChange={handleChange}
                                                onBlur={handleBlur}*/
                                                onChange={(e)=>onInputChange(e)}
                                                /*{...registermodule("name",{required: true})}
                                                /*onChange={(e)=>setName(e.target.value)}*//>
                                                {/*{er̥rors.name && touched.name ? (
                                                    <p className="form-error">{er̥rors.name}</p>
                                                ) : null}*/}
                                                {/*<error>{errors.name?.type === "required" && "Name is required"}</error>*/}
                                                {/*<div class="valid-feedback">Looks good</div>*/}
                                                <div class="invalid-feedback">Please Enter Your Name</div>
                                                </td>
                                            </tr><br/> 

                                            <tr>
                                                <td><h5>Your Email </h5></td>
                                                <td><input 
                                                type="text" 
                                                class="form-control is-valid" 
                                                name="email"  
                                                placeholder="Enter your Email" 
                                                value={email}
                                                /*onChange={handleChange}
                                                onBlur={handleBlur}*/
                                                onChange={(e)=>onInputChange(e)}
                                                /*onChange={(e)=>setEmail(e.target.value)}*//>
                                                {/*{er̥rors.email && touched.email ? (
                                                    <p className="form-error">{er̥rors.email}</p>
                                                ) : null}*/}
                                                {/*<div class="valid-feedback">Looks good</div>*/}
                                                <div class="invalid-feedback">Please Enter Your email</div>
                                                </td>
                                            </tr><br/>

                                            <tr>
                                                <td><h5>Username </h5></td>
                                                <td><input 
                                                type="text" 
                                                class="form-control is-valid" 
                                                name="username"  
                                                placeholder="Enter your Username" 
                                                value={username} 
                                                /*onChange={handleChange}
                                                onBlur={handleBlur}*/
                                                onChange={(e)=>onInputChange(e)}
                                                /*onChange={(e)=>setUsername(e.target.value)}*//>
                                                {/*{er̥rors.username && touched.username ? (
                                                    <p className="form-error">{er̥rors.username}</p>
                                                ) : null}*/}
                                                {/*<div class="valid-feedback">Looks good</div>*/}
                                                <div class="invalid-feedback">Please Enter Your Username</div>
                                                </td>
                                            </tr><br/> 

                                            <tr>
                                                <td><h5>Password </h5></td>
                                                <td><input 
                                                type="password" 
                                                class="form-control is-valid" 
                                                name="password"  
                                                placeholder="Enter your Password" 
                                                value={password} 
                                                /*onChange={handleChange}
                                                onBlur={handleBlur}*/
                                                onChange={(e)=>onInputChange(e)}
                                                /*onChange={(e)=>setPassword(e.target.value)}*//>
                                                {/*{er̥rors.password && touched.password ? (
                                                    <p className="form-error">{er̥rors.password}</p>
                                                ) : null}*/}
                                                {/*<div class="valid-feedback">Looks good</div>*/}
                                                <div class="invalid-feedback">Please Enter Your password</div>
                                                </td>
                                            </tr><br/>

                                            <tr>
                                                <td><h5>Confirm Password </h5></td>
                                                <td><input 
                                                type="password" 
                                                class="form-control is-valid" 
                                                name="confirm"  
                                                placeholder="Confirm your Password" 
                                                value={confirm} 
                                                /*onChange={handleChange}
                                                onBlur={handleBlur}*/
                                                onChange={(e)=>onInputChange(e)}
                                                /*onChange={(e)=>setConfirm(e.target.value)}*//>
                                                {/*{er̥rors.confirm && touched.confirm ? (
                                                    <p className="form-error">{er̥rors.confirm}</p>
                                                ) : null}*/}
                                                {/*<div class="valid-feedback">Looks good</div>*/}
                                                <div class="invalid-feedback">Please Enter Your password</div>
                                                </td>
                                            </tr><br/> 

                                        <tr>
                                            <td colspan="2">{/*<center><input type="submit" class="btnr" value="Register"/></center></td>*/}
                                            <button colspan="2" class="btn btn-secondary" /*onClick={handleClick}/*{() => {navigate("/login")}}*/ >Register</button>
                                            {/*<button className='input-button' type="submit">Register</button>*/}
                                            </td>
                                        </tr>    
                                        {/*<div class="login-register">
                                            <a href="index.php">Login</a>
                                            </div>*/}
                                        </table>
                                    </form>
                                
    
                            </div>
                        </div>
                    </div>
    </div>
                                    
  )
}

export default Register
