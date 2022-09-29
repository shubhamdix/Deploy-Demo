//import "./Style.css"
//import Menu from "./Menu"
//import Home from "./Home"
//import Login from "./Login"
//import Register from "./Register"
//import About_us from "./AboutUs"
//import Contact_us from "./ContactUs"
//import { useState } from 'react'

function Main() {
    const [main, setMain] = useState([])

    var save = function(main_data){
        setMain([...main,main_data])
    }

    return (    
            <div className="container">
            
                <Menu/>
                <Home/>
                <Login/>
                <Register/>
                <About_us/>
                <Contact_us/>
                
            </div>
        
        
    )
}

export default Main