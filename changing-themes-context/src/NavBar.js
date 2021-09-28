import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function NavBar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <header>
                    {/* // <header className={`${context.theme}-theme`}> */}
                    {/* <h2>{context.theme === "light" ? "Light" : "Dark"} Theme -- I'm the NavBar, but no Nav for you -- haha</h2> */}
                    <h2 className={`${context.theme}-theme`}> I'm the NavBar, but no Nav for you -- haha </h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default NavBar