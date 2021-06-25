import React from "react"
import { ThemeContextConsumer } from "./themeContext"


function DropDown() {


    //Move handleSubmit to themeContext??
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    //Move handleSubmit to themeContext??
    handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Which Theme Will You Choose?
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Blue</option>
                </select>
            </label>
            <input type="submit" value="Submit" />


        </form >
    )

}

export default DropDown