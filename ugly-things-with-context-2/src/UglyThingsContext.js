import React, { Component } from "react"
import axios from "axios"
const { Provider, Consumer } = React.createContext()


class UglyThingsContextProvider extends Component {

    state = {
        // id: "",
        title: "",
        imgUrl: "",
        description: "",
        editTitle: "",
        editImgUrl: "",
        editDescription: "",
        isEditing: false,
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

    // array.forEach(e => e.c = +e.b - +e.a);


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

    toggleEdit = (id) => {
        console.log("toggleEdit was clicked!!")
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }
        ))
    }



    // toggleEdit = (id) => {
    //     console.log("toggleEdit was clicked!!")
    //     console.log(id)
    //     const toggle = this.state.uglyThingsList.map((thing => thing._id === id ? thing.isEditing : thing.isEditing === false))
    //     console.log(toggle)
    // }


    //something to match selected id & item id
    //have to to map over list here again??

    // toggleEdit = (e, id) => {
    //     console.log("toggleEdit was clicked!!")
    //     console.log("e.target id", e.target.id)
    //     const editId = id
    //     console.log("editId", editId)

    //     const toggleIt = this.state.uglyThingsList.map(thing => thing._id === id
    //         ?
    //         thing.isEditing = true
    //         :
    //         thing.isEditing = false
    //     )
    //     console.log(toggleIt)


    // }

    // focusInput = () => {
    //     this.inputRef.focus()
    // }




    //     this.setState(prevState => ({
    //         isEditing: !prevState.isEditing
    //     }
    //     ))
    // }


    // handleEdit = (id) => {
    //     console.log("EDIT button was clicked!")
    //     const editId = id

    //     console.log("editedId", editId)

    //     const editedThing = {
    //         title: this.state.editTitle,
    //         imgUrl: this.state.editImgUrl,
    //         description: this.state.editDescription
    //     }
    //     console.log("editedThing:", editedThing)

    //     axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
    //         .then(res => {
    //             const editedThing = res.data
    //             console.log("2nd console(after .then) editedThing:", editedThing)
    //             //reset editForm values
    //             this.setState({
    //                 //re-set form values
    //                 editTitle: "",
    //                 editImgUrl: "",
    //                 editDescription: ""

    //             })
    //             this.getUglyThingsData()
    //         })
    //         .catch(error => console.log(error))
    // }


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
                this.toggleEdit(id)

            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <Provider value={{
                // id: this.state.id,
                title: this.state.title,
                imgUrl: this.state.imgUrl,
                description: this.state.description,
                editTitle: this.state.editTitle,
                editImgUrl: this.state.editImgUrl,
                editDescription: this.state.editDescription,
                isEditing: this.state.isEditing,
                uglyThingsList: this.state.uglyThingsList,
                // getUglyThingsData: this.getUglyThingsData,
                // focusInput: this.focusInput,
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