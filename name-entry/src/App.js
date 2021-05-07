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



//From Stack Overflow:
/*
class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      contacts: contactArray
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const
    { contacts } = this.state,
    name = this.refs.name.value,
    email = this.refs.email.value,
    phone = this.refs.phone.value;
    this.setState({
      contacts: [...contacts, {
        name,
        email,
        phone
      }]
    }, () => {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
    });
  }

  render() {
    const { contacts } = this.state;
    console.log('message',this.state.contacts);
    return (
      <div>
        <h2>Add Someone</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="email" placeholder="email" />
          <input type="text" ref="phone" placeholder="phone" />
          <button type="submit">Submit</button>
        </form>
        <h2>Exsiting contacts:</h2>
        <ul>
          {contacts.map((contact) =>
           <li>{`Name: ${contact.name} Email: ${contact.email} Phone: ${contact.phone}`}</li>
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
*/