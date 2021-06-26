import React from "react"
import { ThemeContextConsumer } from "./themeContext"


function DropDown() {

    return (
        <div>
            <ThemeContextConsumer>
                {(context) => {
                    return (
                        <form className="drop-down" onSubmit={context.handleSubmit}>
                            <label>
                                Which Theme Color Will You Choose?
                                <select value={context.value} onChange={context.handleChange}>
                                    <option value={context.purple}>purple</option>
                                    <option value={context.green}>green</option>
                                    <option value={context.yellow}>yellow</option>
                                    <option value={context.orange}>orange</option>
                                    <option value={context.blue}>blue</option>
                                </select>
                            </label>
                            <input type="submit" value="Submit" />
                        </form >
                    )
                }}
            </ThemeContextConsumer>
        </div>
    )

}

export default DropDown