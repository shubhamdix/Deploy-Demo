import React from 'react'
import  { BrowserRouter as Router,Route,Routes,Link,Switch } from "react-router-dom";
import Menu from './Menu/Menu'
import AboutUs from './Menu/AboutUs';
import ContactUs from './Menu/ContactUs';
import Home from './Menu/Home';
import Login from './Menu/Login';
import Register from './Menu/Register';
//import AdminMenu from './Admin/AdminMenu';





function App() {
  return (
    <>
    <Router>
    <Menu></Menu>
    {/*<AdminMenu></AdminMenu>*/}
    <Routes> 
    <Route  path="/about-us" element={<AboutUs />}></Route>
    <Route  path="/contact-us" element={<ContactUs />}></Route>
    <Route  path="/home" element={<Home />}></Route>
    <Route  path="/login" element={<Login />}></Route>
    <Route  path="/register" element={<Register />}></Route>
    {/*<Route  path="/" element={<Menu/>}></Route>*/}
    <Route  path="/log" element={<Login/>}></Route>
    
    </Routes>
    </Router>
    </>
  )
}

export default App
