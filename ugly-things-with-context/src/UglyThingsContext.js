import React, { Component } from "react"
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class UglyThingsContextProvider extends Component {

    state = {
        title: "",
        imgUrl: "",
        description: "",
        uglyThingsList: []
    }


    componentDidMount() {
        axios.get(`https://api.vschool.io/kellyr/thing`)
            .then((response) => {
                this.setState({
                    uglyThingsList: response.data
                })
                console.log("axios get working")
            })
            .catch(error => console.log(error))
    }


    getUglyThingsData() {
        axios.get(`https://api.vschool.io/kellyr/thing`)
            .then((response) => {
                this.setState({
                    uglyThingsList: response.data
                })
                console.log("axios get working")
            })
            .catch(error => console.log(error))

    }

    //need a clear list data function also???


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
            description: this.state.description
        }

        axios.post(`https://api.vschool.io/kellyr/thing`, newUglyThing)
            .then((response) => {
                const newItem = response.data
                console.log("newItem:", newItem)
                this.setState(prevState => ({
                    uglyThingsList: [newUglyThing, ...prevState.uglyThingsList]
                }))
                console.log("axios post working")
                //reset form values here too??
                //clear data function
                //get data function
                this.getUglyThingsData()

            })
            .catch(error => console.log(error))

    }


    handleDelete = (e) => {

    }

    handleEdit = (e) => {

    }


    render() {
        return (
            <Provider value={{
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
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
