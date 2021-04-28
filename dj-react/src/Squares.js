import React, { Component } from "react"

class Squares extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.changeToBlackOrWhite = this.changeToBlackOrWhite.bind(this)
        this.halfPurple = this.halfPurple.bind(this)
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



    render() {
        //const squareColors = this.state.colors.map(color =>
        //    <Colors color1={this.state.colors[0]} color2={this.state.colors[1]} color3={this.state.colors[2]} color4={this.state.colors[3]} />)

        return (
            <div className="grid-container">
                <div className="square1" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <div className="square2" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[1] }}></div>
                <div className="square3" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[2] }}></div>
                <div className="square4" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[3] }}></div>
                <button onClick={this.changeToBlackOrWhite} className="small-time">Small Time DJ(all black or all white)</button>
                <button onClick={this.halfPurple} className="party-time">Party DJ(top half purple)</button>
            </div>
        )
    }

}

export default Squares