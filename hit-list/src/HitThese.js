import React, { Component } from "react"
import "./HitThese.css"

class HitThese extends Component {
    constructor() {
        super()
        this.state = {
            hitList: []                 //NOTE:  data array has a name and an image for each
        }
    }

    componentDidMount() {
        console.log("hi")
        this.setState()
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => (response.json()))
            .then(data => {
                this.setState({
                    hitList: data
                })
            })
    }

    render() {
        const displayList = this.state.hitList.map(hit => (
            <div className="container">
                <li>
                    <p className="hit-name">{hit.name}  <input type="checkbox"></input></p>
                    <div className="hit-pic">
                        <img width="350px" height="250px" src={hit.image} alt="{hit.name}" />
                    </div>
                </li>
            </div>))
        return (
            <div>
                <ol>
                    {displayList}
                </ol>
            </div>
        )
    }
}

export default HitThese


/*
import React, { Component } from "react"
import "./Form.css"
import Badge from "./Badge"
import randomColor from "randomcolor"

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
            color: "",
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
        e.preventDefault();
        let phoneDigits = this.state.phone;


        if (this.state.firstName === "") {
            alert("All fields must be completed.")
        } else if (this.state.lastName === "") {
            alert("All fields must be completed.")
        } else if (this.state.email === "") {
            alert("All fields must be completed.")
        } else if (this.state.birthPlace === "") {
            alert("All fields must be completed.")
        } else if (this.state.phone === "") {
            alert("All fields must be completed.")
        } else if (this.state.faveFood === "") {
            alert("All fields must be completed.")
        } else if (this.state.tellAboutSelf === "") {
            alert("All fields must be completed.")
        } else if ((!Number(phoneDigits)) || (phoneDigits.length > 10)) {
            alert("Your phone number must be 10 digits starting with area code.  No dashes or other characters.  Please try again.");
        } else {

            let changeColor = randomColor()

            const newBadge = {
                name: `${this.state.firstName} ${this.state.lastName}`,
                email: `${this.state.email}`,
                birthPlace: `${this.state.birthPlace}`,
                phone: `${this.state.phone}`,
                faveFood: `${this.state.faveFood}`,
                tellAboutSelf: `${this.state.tellAboutSelf}`,
                color: changeColor
            }


            this.setState(prevState => ({
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                faveFood: "",
                tellAboutSelf: "",
                color: "",
                badgeInfo: [...prevState.badgeInfo, newBadge]
            }))
        }
    }


    render() {

        const mappedBadges = this.state.badgeInfo.map((badge, index) => {
            return <Badge
                key={badge.index}
                name={badge.name}
                email={badge.email}
                birthPlace={badge.birthPlace}
                phone={badge.phone}
                faveFood={badge.faveFood}
                tellAboutSelf={badge.tellAboutSelf}
                badgeColor={badge.color}
            />
        })


        return (

            <div className="data" >
                <div className="grid-container">
                    <form className="entries" onSubmit={this.handleSubmit}>
                        <label className="title">PLEASE FILL OUT THIS FORM TO CREATE YOUR BADGE:</label>
                        <input
                            type="text"
                            name="firstName"
                            className="first-name"
                            value={this.state.firstName}
                            placeholder="First Name"
                            minlength="3"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            className="last-name"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            minlength="3"
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            className="e-mail"
                            value={this.state.email}
                            placeholder="email"
                            minlength="3"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="birthPlace"
                            className="birth-place"
                            value={this.state.birthPlace}
                            placeholder="Place of Birth"
                            minlength="3"
                            onChange={this.handleChange}
                        />
                        <input
                            type="tel"
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
                            minlength="3"
                            onChange={this.handleChange}
                        />
                        <textarea
                            type="text"
                            name="tellAboutSelf"
                            className="tell-about-self"
                            value={this.state.tellAboutSelf}
                            placeholder="Tell us about yourself."
                            onChange={this.handleChange}
                        />
                        <button className="update-button"> Update Name Badges List</button>
                    </form>

                </div>
                { mappedBadges}
            </div >

        )
    }
}

export default Form
*/

/*
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
*/