import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import "./Main.css"
import Home from "./Home"
import About from "./About"
import Services from "./Services"



function Main() {

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
            </Switch>
            <footer>Plumbing Co. 123 Main St., Anywhere, U.S.A. 92345 Call us now at 888-222-4545</footer>
        </div>

    )

}

export default Main