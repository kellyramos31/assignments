import React, { Component } from "react"
import "./Die.css"




class Die extends Component {

    constructor(props) {
        super(props)

        this.state = {
            square1: this.props.num1,
            square2: this.props.num2,
            square3: this.props.num3,
            square4: this.props.num4,
            square5: this.props.num5,
            counter: 0
        }

        this.rollEm = this.rollEm.bind(this)  //NOTE:  if write your method this way:  rollEm = () =>{this.setState({blah blah code object})}, then don't need the bind(this) stuff.

    }

    rollEm() {
        this.setState(prevState => {
            return {
                square1: "Set this",
                square2: "Not this",
                counter: this.state.counter + 1  //this is OK, b/c not trying to change this.state.counter; this.state.counter++ is NOT OK.
            }
        })
    }



    render() {

        return (

            <div className="all-dice">
                <div className="first-die">{this.square1}</div>
                <div className="second-die">{this.square2}</div>
                <div className="third-die">{this.square3}</div>
                <div className="fourth-die">{this.square4}</div>
                <div className="fifth-die">{this.square5}</div>
                <button onClick={this.rollEm} className="roll-em">Roll 'Em</button>
                <h4>Count Rolls: {this.state.counter}</h4>
            </div>

        )
    }
}

export default Die


/*
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
*/

/*
 changeToBlackOrWhite() {

        this.setState(prevState => {
            if (prevState.colors[0] === "white") {
                return {
                    colors: ["black", "black", "black", "black"]
                }
            } else {
                return { colors: ["white", "white", "white", "white"] }
            }
        })
    }

    halfPurple() {

        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    */
