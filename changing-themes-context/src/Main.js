import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Main() {
    return (
        <ThemeContextConsumer>

            {context => (
                <div>
                    <body className={`${context.theme}-theme`}>
                        <h2 className={`${context.theme}-theme`}>HEY!  I'm the MAIN. Check me out.</h2>
                        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
                    </body>
                </div>
            )}
        </ThemeContextConsumer>
    )
}


export default Main