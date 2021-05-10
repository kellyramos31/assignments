import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            faveFood: "",
            tellAboutSelf: "",
            badgeInfo: []
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
            email: "",
            birthPlace: "",
            phone: "",
            faveFood: "",
            tellAboutSelf: "",
            badgeInfo: [...prevState.badgeInfo, addName]
        }))
    }


    render() {
        const badgeList = this.state.badgeInfo.map(name => <li>{name}</li>)
        return (
            <div className="data-entry">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        className="first-name"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        className="last-name"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="email"
                        value={this.state.email}
                        placeholder="email"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="birthPlace"
                        className="birth-place"
                        value={this.state.birthPlace}
                        placeholder="Place of Birth"
                        onChange={this.handleChange}
                    />
                    <input
                        type="tel"                        //CHECK does this need to be number & constrain min & max?
                        name="phone"
                        className="phone-number"
                        value={this.state.phone}
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="faveFood"
                        className="fave-food"
                        value={this.state.faveFood}
                        placeholder="Favorite Food"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="tellAboutSelf"
                        className="tell-self"
                        value={this.state.tellAboutSelf}
                        placeholder="Tell us about yourself."
                        onChange={this.handleChange}
                    />
                    <button className="update-button">Update My Name Badges List</button>
                </form>
                <ol className="list-out">
                    {badgeList}
                </ol>

            </div>

        )
    }
}

export default Form

/*
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
*/