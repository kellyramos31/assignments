import React, { Component } from "react"
import "./Dice.css"

class DiceBox extends Component {
    constructor() {
        super()

        this.state = {
            number1: null,
            number2: null,
            number3: null,
            number4: null,
            number5: null
        }

        this.rollTheDice = this.rollTheDice.bind(this)

    }

    rollTheDice() {
        this.setState({
            number1: Math.floor(Math.random() * 6) + 1,
            number2: Math.floor(Math.random() * 6) + 1,
            number3: Math.floor(Math.random() * 6) + 1,
            number4: Math.floor(Math.random() * 6) + 1,
            number5: Math.floor(Math.random() * 6) + 1
        })
    }

    render() {

        return (
            <div className="squares">
                <div className="square1" style={{ width: "75px", height: "75px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number1}</div>
                <div className="square2" style={{ width: "75px", height: "75px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number2}</div>
                <div className="square3" style={{ width: "75px", height: "75px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number3}</div>
                <div className="square4" style={{ width: "75px", height: "75px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number4}</div>
                <div className="square5" style={{ width: "75px", height: "75px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number5}</div>
                <button className="roll" onClick={this.rollTheDice}>Click to Roll Dice</button>
            </div>
        )
    }

}

export default DiceBox