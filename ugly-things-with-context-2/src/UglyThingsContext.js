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
                    uglyThingsList: res.data.map(thing => ({ ...thing, isEditing: false }))
                })
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



    handleEdit = (e, id) => {
        e.preventDefault()
        // console.log("EDIT button was clicked!")
        const editId = id
        console.log("this is editId:", editId)
        // console.log("editedId", editId)
        // alert(e.target.editTitle.value)
        // alert(e.target.editImgUrl.value)

        const editedThing = {
            title: e.target.editTitle.value,
            imgUrl: e.target.editImgUrl.value,
            description: e.target.editDescription.value
        }

        console.log("editedThing:", editedThing)

        axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
            .then(res => {
                const editedThing = res.data
                console.log("2nd console(after .then) editedThing:", editedThing)
                //reset editForm values
                this.setState({
                    editTitle: "",
                    editImgUrl: "",
                    editDescription: ""
                })
                this.getUglyThingsData()
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <Provider value={{
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                // editTitle: this.state.editTitle,
                // editImgUrl: this.state.editImgUrl,
                // editDescription: this.state.editDescription,
                uglyThingsList: this.state.uglyThingsList,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer }