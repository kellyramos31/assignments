import React, { Component } from "react"
import axios from "axios"


class App extends Component {
  constructor() {
    super()
    this.state = {
      color: ""
    }

  }

  componentDidMount() {
    console.log("hi")

    axios.get("https://www.colr.org/json/color/random?timestamp={new%20Date().getTime()}")
      .then(response => {
        this.setState({
          color: response.data.colors[0].hex
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.color)
    return (
      <div>
        <div className="change-it" style={{ backgroundColor: "#" + this.state.color }}> HOWDY</div>
      </div >
    )
  }
}

export default App;


