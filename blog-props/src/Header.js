import React from "react"
import "./Header.css"

//Need to render a <NavBar /> component in this header componenet


function Header() {
    return (
        <div className="header-container">
            <div className="color-overlay">
                <h1 className="header-text">Clean Blog</h1>
                <div className="subtitle-text">A Blog Theme by Start Bootstrap</div>
            </div>
        </div>
    )
}

export default Header

