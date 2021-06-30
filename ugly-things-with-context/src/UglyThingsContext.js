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
            .then(res => {
                this.setState({
                    uglyThingsList: res.data
                })
                console.log("axios GET working/componentDidMount")
            })
            .catch(error => console.log(error))
    }


    getUglyThingsData = () => {
        axios.get(`https://api.vschool.io/kellyr/thing`)
            .then(res => {
                this.setState({
                    uglyThingsList: res.data
                })
                console.log("axios GET working")
            })
            .catch(error => console.log(error))

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
            description: this.state.description
        }

        axios.post(`https://api.vschool.io/kellyr/thing`, newUglyThing)
            .then(res => {
                const newItem = res.data
                console.log("newItem:", newItem)
                this.setState(prevState => ({
                    //add newUglyThing to List
                    uglyThingsList: [newUglyThing, ...prevState.uglyThingsList],
                    //re-set form values
                    title: "",
                    imgUrl: "",
                    description: ""
                }))
                console.log("axios POST working")


            })
            .catch(error => console.log(error))

    }


    handleDelete = (id) => {
        const deletedId = id
        console.log("deletedId:", deletedId)
        console.log("DELETE button was clicked!")
        axios.delete(`https://api.vschool.io/kellyr/thing/${id}`)
            .then(res => {
                const deletedThing = res.data
                console.log("deletedThing:", deletedThing)
                // this.getUglyThingsData()

            })
            .catch(error => console.log(error))
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
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer }