import React, { Component } from "react"

class Squares extends Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    render() {
        //const squareColors = this.state.colors.map(color =>
        //    <Colors color1={this.state.colors[0]} color2={this.state.colors[1]} color3={this.state.colors[2]} color4={this.state.colors[3]} />)

        //console.log(squareColors)

        return (
            <div className="grid-container">
                <div className="square1" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <div className="square2" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <div className="square3" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <div className="square4" style={{ width: "250px", height: "250px", border: "8px solid black", backgroundColor: this.state.colors[0] }}></div>
                <button className="small-time">Small Time DJ(black and white)</button>
            </div>
        )
    }

}

export default Squares