import React, { Component } from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      namesArr: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const addName = `${this.state.firstName} ${this.state.lastName}`
    this.setState(prevState => ({
      firstName: "",
      lastName: "",
      namesArr: [...prevState.namesArr, addName]
    }))
  }


  render() {
    const namesList = this.state.namesArr.map(name => <li>{name}</li>)
    return (
      <div className="data-entry">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <button>Update My List</button>
        </form>
        <ol className="list-out">
          {namesList}
        </ol>

      </div>

    )
  }
}

export default App;
