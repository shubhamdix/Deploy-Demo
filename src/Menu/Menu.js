import "./Style.css"
import React from "react"
import { Link } from "react-router-dom";
function Menu() {
  return (
    
    <div className="container">
    
    <nav class="navbar navbar-expand-lg navbar-dark shadow mynav">
        <div class="container-fluid">
            <a class="navbar-brand" href="/Home">Fashion World </a>
            
            <div class="collapse navbar-collapse" id="navbarNav">        
        <ul class="navbar-nav mb-2 mt-2">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/home">HOME</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/login">LOGIN</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/register">REGISTER</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/contact-us">Contact US</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/about-us">About US</a></li>  
             
        </ul>
        </div>
        <Link class="btn btn-outline-danger mx-1" to="/menu">Logout</Link>
        </div>
    </nav> 
    
    </div>
  )
}

export default Menu;