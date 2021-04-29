import React, { Component } from "react"


class DiceBox extends Component {
    constructor() {
        super()
        this.state = {
            number1: 1,
            number2: 2,
            number3: 3,
            number4: 4,
            number5: 5
        }

        this.rollTheDice = this.rollTheDice.bind(this)

    }

    rollTheDice() {

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




}

render() {

    return (
        <div>

        </div>
    )
}

}





export default DiceBox

/*
import React, { Component } from "react"
import "./audio.m4a"

class Squares extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.changeToBlackOrWhite = this.changeToBlackOrWhite.bind(this)
        this.halfPurple = this.halfPurple.bind(this)
        this.oneBlue = this.oneBlue.bind(this)
        this.diffOneBlue = this.diffOneBlue.bind(this)
        this.bigTimeOne = this.bigTimeOne.bind(this)
        this.bigTimeTwo = this.bigTimeTwo.bind(this)
        this.bigTimeThree = this.bigTimeThree.bind(this)
        this.bigTimeFour = this.bigTimeFour.bind(this)
    }

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

    oneBlue() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })

    }

    diffOneBlue() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }

    bigTimeOne() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], "orange", "yellow", prevState.colors[3]]
            }
        })
    }

    bigTimeTwo() {
        this.setState(prevState => {
            return {
                colors: ["green", prevState.colors[1], "magenta", prevState.colors[3]]
            }
        })
    }

    bigTimeThree() {
        this.setState(prevState => {
            return {
                colors: ["turquoise", "silver", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    bigTimeFour() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "peach", "indigo"]
            }
        })
    }

    render() {
        //const squareColors = this.state.colors.map(color =>
        //    <Colors color1={this.state.colors[0]} color2={this.state.colors[1]} color3={this.state.colors[2]} color4={this.state.colors[3]} />)

        return (
            <div className="grid-container">
                <div className="square1" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <div className="square2" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[1] }}></div>
                <div className="square3" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[2] }}></div>
                <div className="square4" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[3] }}></div>
                <button onClick={this.changeToBlackOrWhite} className="small-time">Small Time DJ (all black or all white)</button>
                <button onClick={this.halfPurple} className="party-time">Party DJ (top half purple)</button>
                <button onClick={this.oneBlue} className="prof-time1">Prof'l DJ (left one blue)</button>
                <button onClick={this.diffOneBlue} className="prof-time2">Prof'l DJ (right one blue)</button>
                <button onClick={this.bigTimeOne} className="big-time1">Big Time DJ 1(  )</button>
                <button onClick={this.bigTimeTwo} className="big-time2">Big Time DJ 2 (  )</button>
                <button onClick={this.bigTimeThree} className="big-time3">Big Time DJ 3 (  )</button>
                <button onClick={this.bigTimeFour} className="big-time4">Big Time DJ 4 (  )</button>
            </div>
        )
    }

}

export default Squares
*/