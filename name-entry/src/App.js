import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
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
    const addName = this.state.name
    this.setState(prevState => ({
      name: "",
      namesArr: [...prevState.namesArr, addName]
    }))
  }


  render() {
    const namesList = this.state.namesArr.map(name => <li>{name}</li>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <button>Update My List</button>
        </form>
        <ol>
          {namesList}
        </ol>

      </div>

    )
  }
}

export default App;
