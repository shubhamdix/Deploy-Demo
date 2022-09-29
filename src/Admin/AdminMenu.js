import React from "react"
//import { Link } from "react-Router-dom";
function AdminMenu() {
  return (
    
    <div className="container"> 
    
    <nav class="navbar navbar-expand-lg navbar-dark shadow mynav">
        <div class="container-fluid">
            <a class="navbar-brand" to="/">Fashion World </a>
        
            <div class="collapse navbar-collapse" id="navbarNav">        
        <ul class="navbar-nav mb-2 mt-2">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="home">HOME</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/manage_product">MANAGE PRODUCT</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="/manage_category">MANAGE CATEGORY</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="product_catalog">PRODUCT CATALOG</a></li>   
        </ul>
        </div>
        </div>
    </nav> 
    </div>
  )
}

export default AdminMenu;