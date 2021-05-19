import React, { Component } from "react"
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
        <p>{pageDisplay}</p>
        <div className="change-it" style={{ height: "500px", backgroundColor: this.state.color }}></div>
        <button onClick={this.handleClick}>Get a New Color</button>
      </div >
    )
  }
}

export default App;


