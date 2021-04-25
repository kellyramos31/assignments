import React from "react"

class Squares extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: [white, white, white, white]
        }

    }
    render() {
        const squareColors = this.state.colors.map()
        return (
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )

    }

}


export default Squares