import React from "react"
import "./Header.css"

//Need to render a <NavBar /> component in this header componenet


function Header() {
    const NavBar = () =>
        <div className="navbar">
            <div className="bootstrap">Start Bootstrap</div>
            <p className="home">HOME</p>
            <p className="about">ABOUT</p>
            <p className="sample-post">SAMPLE POST</p>
            <p className="contact">CONTACT</p>
        </div>
    return (
        <div className="header-container">
            <div className="color-overlay">
                <div className="start-bootstrap">Start Bootstrap</div>
                <NavBar />
                <h1 className="header-text">Clean Blog</h1>
                <div className="subtitle-text">A Blog Theme by Start Bootstrap</div>
            </div >
        </div >
    )
}

export default Header

