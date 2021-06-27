import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()

class UglyThingsContextProvider extends Component {

    state = {
        uglyData: [],
        title: "",
        imgUrl: "",
        description: "",
        comment: "",
        uglyThingsList: []
    }

    componentDidMount() {

    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const newUglyThing = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description,
            comment: this.state.comment
        }
        this.setState(prevState => ({
            uglyThingsList: [newUglyThing, ...prevState.uglyThingsList],
            title: "",
            imgUrl: "",
            description: "",
            comment: ""
        }))

    }


    render() {
        return (
            <Provider value={{
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                comment: this.state.comment,
                uglyThingsList: this.state.uglyThingsList,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit

            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer }
