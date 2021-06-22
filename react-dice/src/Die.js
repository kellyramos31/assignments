import React, { Component } from "react"
import "./Die.css"



class Die extends Component {

    constructor(props) {
        super(props)

        this.state = {
            square1: this.props.num1,
            counter: 0
        }

        this.rollEm = this.rollEm.bind(this)  //NOTE:  if write your method this way: rollEm = () =>{this.setState({blah blah code object})}, then don't need the bind(this) stuff.

    }

    rollEm() {
        this.setState(prevState => {
            return {
                square1: "Set this",   //Set this to stay same value for 3 rolls if selected
                counter: this.state.counter + 1  //NOTE:  this is OK, b/c not trying to change this.state.counter; this.state.counter++ is NOT OK.
            }
        })
    }



    render() {

        return (

            <div className="all-dice">
                <div className="first-die">{this.square1}</div>
                {/* <div className="second-die">{this.square2}</div>
                <div className="third-die">{this.square3}</div>
                <div className="fourth-die">{this.square4}</div>
                <div className="fifth-die">{this.square5}</div> */}
                <button onClick={this.rollEm} className="roll-em">Select It</button>
                <h4>Count Rolls: {this.state.counter}</h4>
            </div>

        )
    }
}

export default Die


