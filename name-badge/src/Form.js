import React, { Component } from "react"
import "./Form.css"
import Badge from "./Badge"

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
        const newBadge = {
            name: `${this.state.firstName} ${this.state.lastName}`,
            email: `${this.state.email}`,
            birthPlace: `${this.state.birthPlace}`,
            phone: `${this.state.phone}`,
            faveFood: `${this.state.faveFood}`,
            tellAboutSelf: `${this.state.tellAboutSelf}`
        }


        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            faveFood: "",
            tellAboutSelf: "",
            badgeInfo: [...prevState.badgeInfo, newBadge]
        }))
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
            />
        })


        return (

            <div className="data">
                <div className="grid-container">
                    <form className="entries" onSubmit={this.handleSubmit}>
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
                            className="e-mail"
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
                        <textarea
                            type="text"
                            name="tellAboutSelf"
                            className="tell-about-self"
                            value={this.state.tellAboutSelf}
                            placeholder="Tell us about yourself."
                            onChange={this.handleChange}
                        />
                        <button className="update-button">Update My Name Badges List</button>
                    </form>

                </div>
                { mappedBadges}
            </div>

        )
    }
}

export default Form

/*
import React from "react"
import blogs from "./blogs"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"
import "./App.css"

function App() {
    const blogInfo = blogs.map((blog, index) => {
        return <BlogList
            key={blog.index}
            title={blog.title}
            subtitle={blog.subTitle}
            author={blog.author}
            date={blog.date}
        />
    })

    return (

        <div>
            <Header />
            {blogInfo}
            <button>Older Posts →</button>
            <hr className="footer-hr"></hr>
            <Footer />
        </div>

    )
}

export default App
*/


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
        const addName = `${ this.state.firstName } ${ this.state.lastName }`
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