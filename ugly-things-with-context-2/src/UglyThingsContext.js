import React, { Component } from "react"
import axios from "axios"
const { Provider, Consumer } = React.createContext()


class UglyThingsContextProvider extends Component {

    state = {
        // id: "",
        // title: "",
        // imgUrl: "",
        // description: "",
        // isEditing: "",
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
                this.setState({
                    //re-set form values
                    title: "",
                    imgUrl: "",
                    description: ""

                })
                console.log("axios POST working")
                this.getUglyThingsData()

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
                this.getUglyThingsData()
            })
            .catch(error => console.log(error))
    }


    toggleEdit = () =>
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }
        ))

    handleEdit = (id) => {
        console.log("EDIT button was clicked!")
        const editedId = id
        console.log("editedId", editedId)

        const editedThing = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        console.log("editedThing:", editedThing)

        axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
            .then(res => {
                const editedThing = res.data
                console.log("2nd console(after .then) editedThing:", editedThing)
                this.props.getUglyThingsData()
            })
            .catch(error => console.log(error))

        this.toggleEdit()

    }


    render() {
        return (
            <Provider value={{
                id: this.state.id,
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                isEditing: this.state.isEditing,
                uglyThingsList: this.state.uglyThingsList,
                getUglyThingsData: this.getUglyThingsData,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete,
                toggleEdit: this.toggleEdit,
                handleEdit: this.handleEdit
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer }