import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function NavBar() {
    return (
        <ThemeContextConsumer>
            <h1>Check out the button below!  Wow, it toggles the page theme.</h1>
        </ThemeContextConsumer>
    )
}

export default NavBar