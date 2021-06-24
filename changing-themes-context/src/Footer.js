import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            <footer>HEY!  I'm a GROOVY footer.</footer>
        </ThemeContextConsumer>
    )
}


export default Footer