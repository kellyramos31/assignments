import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>HEY!  I'm a GROOVY footer.</footer>
            )}
        </ThemeContextConsumer>
    )
}


export default Footer