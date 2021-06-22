import React, { Component } from "react"
import "./App.css"
import axios from "axios"


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      color: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("hi")
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => {
        this.setState({
          isLoading: true,
          color: "#" + response.data.colors[0].hex
        })

      })
      .catch(error => console.log(error))

    this.setState(prevState => {
      return {
        isLoading: !prevState.isLoading
      }

    })
  }


  handleClick() {
    console.log("I'm working")
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => {
        this.setState({
          isLoading: true,
          color: "#" + response.data.colors[0].hex
        })

      })
      .catch(error => console.log(error))

    this.setState(prevState => {
      return {
        isLoading: !prevState.isLoading
      }

    })
  }

  render() {
    console.log(this.state.color)
    let pageDisplay = this.state.isLoading ? "Check out this color!  What do you think?" : null
    return (
      <div>
        <p className="question">{pageDisplay}</p>
        <div className="change-it" style={{ height: "400px", backgroundColor: this.state.color }}></div>
        <button className="getNewColor" onClick={this.handleClick}><span>CLICK HERE</span> to display a different color!</button>
        <div className="bottom-band"></div>
      </div >
    )
  }
}

export default App;


