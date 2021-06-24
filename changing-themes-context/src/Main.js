import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>

            {context => (
                <h2>HEY!  I'm the MAIN.</h2>
                // <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )
}


export default Main