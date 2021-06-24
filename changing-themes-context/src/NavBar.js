import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function NavBar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme -- I'm the NavBar, but there's no Nav -- haha</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default NavBar