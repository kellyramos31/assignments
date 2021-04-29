import React, { Component } from "react"
import "./Dice.css"


class DiceBox extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            number5: 0
        }

        this.rollTheDice = this.rollTheDice.bind(this)

    }

    rollTheDice() {
        this.setState({
            number1: 1,
            number2: 2,
            number3: 3,
            number4: 4,
            number5: 5
        })
    }

    render() {

        return (
            <div className="squares">
                <div className="square1" style={{ width: "50px", height: "50px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number1}</div>
                <div className="square2" style={{ width: "50px", height: "50px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number2}</div>
                <div className="square3" style={{ width: "50px", height: "50px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number3}</div>
                <div className="square4" style={{ width: "50px", height: "50px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number4}</div>
                <div className="square5" style={{ width: "50px", height: "50px", border: "8px solid black", backgroundColor: "royalblue" }}>{this.state.number5}</div>
                <button onClick={this.rollTheDice}>Roll Dice</button>
            </div>
        )
    }

}

export default DiceBox