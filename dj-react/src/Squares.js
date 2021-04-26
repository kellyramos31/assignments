import React from "react"

class Squares extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    render() {
        const squareColors = this.state.colors.map(color =>
            <Colors color1={this.state.colors[0]} color2={this.state.colors[1]} color3={this.state.colors[2]} color4={this.state.colors[3]} />)

        console.log(squareColors)

        return (
            <div>
                {squareColors}
            </div>
        )
    }

}

export default Squares