import React, { Component } from "react"
import axios from "axios"
const { Provider, Consumer } = React.createContext()


class PawsContextProvider extends Component {

    state = {
        //need to create other arrays in state for dropdown menu info??  Figure out how to handle this.
        dogFriendlyRestaurants: [],
        myFaves: []
    }


//NOTE:  right now only returning 20 businesses -- how to increase limit or return top rated?

    componentDidMount() {
        //Call to Yelp Fusion API to get business data:
        //Q:  Have to do multiple requests b/c limited to #  on each request??? [need to use offset]
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly}`, {

            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
            ,

            params: {
                limit: 50
            //     categories: "restaurants",
            //     term: "dog friendly"
            //     // limit: 50,
            //     // offset: 51
            //     //NOTE:  total of ~86 restaurants show up (b/c only 50 each request => do I need 2 requests to get all?? -- how structure this??)
            //     //need offset of 81?? Or maybe sort by rated & just return top 50 based on ratings??
            //     //other options = open_at, open_now 
            //     //ALSO:  options to sort by rating, review_count, distance
            }
        })

            .then(res => {
                console.log("axios GET/component did mount working")
                this.setState({
                    dogFriendlyRestaurants: res.data.businesses
                })
               
                console.log(res.data)

            })

            .catch(err => console.log(err))
    }




//Something to handle dropdown menu choices??  Examples:  based on smaller geography; cuisine; price point; rating


render() {

    return (
        <Provider value={{
            dogFriendlyRestaurants: this.state.dogFriendlyRestaurants
        }}
        >
            {this.props.children}
        </Provider>
    )
}

}
export { PawsContextProvider, Consumer as PawsContextConsumer }



// import React, { Component } from "react"
// import axios from "axios"
// const { Provider, Consumer } = React.createContext()


// class UglyThingsContextProvider extends Component {

//     state = {
//         title: "",
//         imgUrl: "",
//         description: "",
//         uglyThingsList: []
//     }

//     componentDidMount() {
//         axios.get(`https://api.vschool.io/kellyr/thing`)
//             .then(res => {
//                 this.setState({
//                     uglyThingsList: res.data
//                 })
//                 console.log("axios GET working/componentDidMount")
//             })
//             .catch(error => console.log(error))
//     }

//     getUglyThingsData = () => {
//         axios.get(`https://api.vschool.io/kellyr/thing`)
//             .then(res => {
//                 this.setState({
//                     uglyThingsList: res.data
//                 })
//             })
//             .catch(error => console.log(error))

//     }


//     handleChange = (e) => {
//         const { name, value } = e.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()

//         const newUglyThing = {
//             title: this.state.title,
//             imgUrl: this.state.imgUrl,
//             description: this.state.description
//         }

//         axios.post(`https://api.vschool.io/kellyr/thing`, newUglyThing)
//             .then(res => {
//                 const newItem = res.data
//                 console.log("newItem:", newItem)
//                 this.setState({
//                     //re-set form values
//                     title: "",
//                     imgUrl: "",
//                     description: ""

//                 })
//                 console.log("axios POST working")
//                 this.getUglyThingsData()

//             })
//             .catch(error => console.log(error))

//     }

//     handleDelete = (id) => {
//         const deletedId = id
//         console.log("deletedId:", deletedId)
//         console.log("DELETE button was clicked!")
//         axios.delete(`https://api.vschool.io/kellyr/thing/${id}`)
//             .then(res => {
//                 const deletedThing = res.data
//                 console.log("deletedThing:", deletedThing)
//                 this.getUglyThingsData()
//             })
//             .catch(error => console.log(error))
//     }



//     handleEdit = (e, id) => {
//         e.preventDefault()
//         // console.log("EDIT button was clicked!")
//         const editId = id
//         console.log("this is editId:", editId)
//         // console.log("editedId", editId)
//         // alert(e.target.editTitle.value)
//         // alert(e.target.editImgUrl.value)

//         const editedThing = {
//             title: e.target.editTitle.value,
//             imgUrl: e.target.editImgUrl.value,
//             description: e.target.editDescription.value
//         }

//         console.log("editedThing:", editedThing)

//         axios.put(`https://api.vschool.io/kellyr/thing/${id}`, editedThing)
//             .then(res => {
//                 const editedThing = res.data
//                 console.log("2nd console(after .then) editedThing:", editedThing)
//                 //reset editForm values
//                 this.setState({
//                     editTitle: "",
//                     editImgUrl: "",
//                     editDescription: ""
//                 })
//                 this.getUglyThingsData()
//             })
//             .catch(error => console.log(error))
//     }


//     render() {
//         return (
//             <Provider value={{
//                 title: this.state.title,
//                 imgUrl: this.state.imgUrl,
//                 description: this.state.description,
//                 uglyThingsList: this.state.uglyThingsList,
//                 handleChange: this.handleChange,
//                 handleSubmit: this.handleSubmit,
//                 handleDelete: this.handleDelete,
//                 handleEdit: this.handleEdit
//             }}>
//                 {this.props.children}
//             </Provider>
//         )
//     }
// }

// export { UglyThingsContextProvider, Consumer as UglyThingsContextConsumer }


// axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/gR9DTbKCvezQlqvD7_FzPw`, {
//     headers: {
//         Authorization: `Bearer ${token}`
//     },
//     params: {
//         term: 'restaurants'
//     }
// })
//     .then(res => {
//         setSearchResults(res.data)
//         console.log(res.data)
//     })
//     .catch(err => console.log(err))
// }