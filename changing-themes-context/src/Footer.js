import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>AND, I'm the GROOVY footer.</footer>
            )}
        </ThemeContextConsumer>
    )
}


export default Footer