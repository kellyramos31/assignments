import React from "react"
import "./Header.css"
import logo from "./assets/paws2-logo-green.jpg"

function Header () {
    return (
        <div className="app-title">
            <img src={logo} className="paws2-logo" alt="logo" />
        </div>
  
            
    )
}

export default Header