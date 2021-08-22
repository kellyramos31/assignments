import React, { Component } from "react"
import axios from "axios"
import zero from "./assets/small_0.png"
import one from "./assets/small_1.png"
import oneHalf from "./assets/small_1_half.png"
import two from "./assets/small_2.png"
import twoHalf from "./assets/small_2_half.png"
import three from "./assets/small_3.png"
import threeHalf from "./assets/small_3_half.png"
import four from "./assets/small_4.png"
import fourHalf from "./assets/small_4_half.png"
import five from "./assets/small_5.png"

const PawsContext = React.createContext()


class PawsContextProvider extends Component {

    state = {
        // yelpResponse: [],
        dogFriendlyRestaurants: [],
        // markers: [],
        //create an array of images here instead???
        buttonTextState: "",
        isHearted: false,
        imageUrl: "",
        myFaves: []
    }


//NOTE: got limit to 50 -- how structure request(s) to get the balance of businesses into one array?  Need to be 2 separate requests??

//From Postman:  url for 51-100 data records:  
//https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly&limit=50&offset=51

    componentDidMount() {
        //Q:  How combine the two axios GET requests needed for total datapoints??
        //Call to Yelp Fusion API to get business data:
        //Q:  Have to do multiple requests b/c limited to #  on each request??? [need to use offset]
        //axios.all to do the 2 requests to get 1-50 & 51-100? + axios.spread?? (interceptors??)
        //look for info re:  pagination/recursively//for loop


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
            //      
            //     //ALSO:  options to sort by rating, review_count, distance
            }
        })

            .then(res => {
                console.log("axios GET/component did mount working")
                console.log(res.data)

                this.setState({
                    dogFriendlyRestaurants: res.data.businesses
                })

                this.addToggleProperty()
    
            })
            
            .catch(err => console.log(err))

           
    }

    //Switch statement to display Yelp Stars ratings 
    //(NOTE:  leave breaks in even though "unreachable code" warning)

    // componentDidMount() {
    //     //Q:  How combine the two axios GET requests needed for total datapoints??
    //     //Call to Yelp Fusion API to get business data:
    //     //Q:  Have to do multiple requests b/c limited to #  on each request??? [need to use offset]
    //     //axios.all to do the 2 requests to get 1-50 & 51-100? + axios.spread?? (interceptors??)
    //     //look for info re:  pagination/recursively//for loop


    //     axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly}`, {

    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    //         }
    //         ,

    //         params: {
    //             limit: 50
    //         //     categories: "restaurants",
    //         //     term: "dog friendly"
    //         //     // limit: 50,
    //         //     // offset: 51
    //         //     //NOTE:  total of ~86 restaurants show up (b/c only 50 each request => do I need 2 requests to get all?? -- how structure this??)
    //         //     //need offset of 81?? Or maybe sort by rated & just return top 50 based on ratings??
    //         //     //other options = open_at, open_now 
    //         //      
    //         //     //ALSO:  options to sort by rating, review_count, distance
    //         }
    //     })

    //         .then(res => {
    //             console.log("axios GET/component did mount working")
    //             this.setState({
    //                 dogFriendlyRestaurants: res.data.businesses
    //             })
    //             console.log(res.data)
    //             //console.log(this.state.markers)
    //             // this.getMarkers()

    //         })

            

    //         .catch(err => console.log(err))
    // }




    // addToggleProperty = () => {
    //     const dogFriendlyRestaurants = this.state.yelpResponse.map(business=>{
    //         return
    //                {...business, isHearted:false}
    //     })
    //             this.setState({
    //                 dogFriendlyRestaurants: dogFriendlyRestaurants
    //             })

    // }

   addToggleProperty = () => {
        let addedProperty = this.state.dogFriendlyRestaurants.map((restaurant)=>{
            restaurant.isHearted = false
            return restaurant
        })
        console.log("data with isHearted added:", addedProperty)
        this.setState({
            dogFriendlyRestaurants: addedProperty
        })
        
        // this.setState(prevState=> ({
        //     dogFriendlyRestaurants: {...prevState.dogFriendlyRestaurants, isHearted: false}
        // }))
        
    }
    

    yelpStars = (yelpRating) => {
   
    switch (yelpRating) {    
        case 0:  return <img src={zero} alt = "zero stars"/>;
        // eslint-disable-next-line
        break; 
        case 1.0: return <img src={one} alt = "one star"/>;
        // eslint-disable-next-line
        break; 
        case 1.5:  return <img src={oneHalf} alt = "one and half stars"/>;
        // eslint-disable-next-line
        break;
        case 2.0: return <img src={two} alt = "two stars"/>;
        // eslint-disable-next-line
        break;
        case 2.5:  return <img src={twoHalf} alt = "two and half stars"/>;
        // eslint-disable-next-line
        break;
        case 3.0:  return <img src={three} alt = "three stars"/>;
        // eslint-disable-next-line
        break;
        case 3.5: return <img src={threeHalf} alt = "three and half stars"/>;
        // eslint-disable-next-line
        break;
        case 4.0: return <img src={four} alt = "four stars"/>;
        // eslint-disable-next-line
        break;
        case 4.5: return <img src={fourHalf} alt = "four and half stars"/>;
        // eslint-disable-next-line
        break;
        case 5.0:  return <img src={five} alt = "five stars"/>;
        // eslint-disable-next-line
        break;
        default:   return <h2>no rating available</h2>
    }
}

toggleHeart = (id) => {
     // 
    console.log("toggleHeart clicked! This is current isHearted state:", this.state.isHearted)
    this.setState({
        isHearted: !this.state.isHearted
    })
    console.log("toggleHeart id", id)
}



handleFave = (id, restaurant, address, city, phone, isHearted) => {
    console.log("current isHearted state:", isHearted)
    this.toggleHeart(id)
    this.buttonText()
    // console.log("isHearted after click?", !isHearted)
    console.log("id:", id)  //this is console logging the correct business id
    const newFave = {
        id: id,
        restaurant: restaurant,
        address: address,
        city: city,  
        phone: phone,
        // buttonTextState: this.state.buttonTextState,
        isHearted: !this.state.isHearted
    }

    
    console.log("button text state", this.state.buttonTextState)
    
    console.log("console log this.state.buttonTextState", this.state.buttonTextState)
    console.log("newFave is:", newFave)

    this.setState (prevState=> {
        return {
            myFaves:  [...prevState.myFaves, newFave]
    }
            
    //Possible to also change color of map icon somehow here??
})
 
}


buttonText = () => {
    if(this.state.isHearted===true){
    this.setState ({ 
        buttonTextState:  "❤️"
    })
    } else if (this.state.isHearted===false) {
        this.setState ({
            buttonTextState: "Add to Faves"
        })
    }
}

    


handleFaveDelete = (id) => {
    console.log("delete this id", id) 
    this.setState(prevState => {
      return {
        myFaves: prevState.myFaves.filter(fave=> fave.id !== id)
      }
    })
  
  }




handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


//need to add a toggle for form so show if want to add photo & then hide if not???

// handleMyDogPhoto = () => {

// this.setState(prevState => ({
//     myFaves: {                   // object that we want to update
//         ...prevState.myFaves,    // keep all other key-value pairs
//         photo: imageUrl       // update the value of specific key
//     }
// }))


// }



//Something to handle dropdown menu choices??  Examples:  based on smaller geography; cuisine; price point; rating


render() {

    return (
        <PawsContext.Provider value={{
            // loading: this.state.loading,
            dogFriendlyRestaurants: this.state.dogFriendlyRestaurants,
            yelpStars: this.yelpStars,
            handleFave: this.handleFave,
            myFaves: this.state.myFaves,
            buttonText: this.buttonText,
            buttonTextState: this.state.buttonTextState,
            isHearted: this.state.isHearted,
            toggleHeart: this.toggleHeart,
            handleFaveDelete: this.handleFaveDelete,
            handleChange: this.handleChange,
            handleMyDogPhoto: this.handleMyDogPhoto
        }}
        >
            {this.props.children}
        </PawsContext.Provider>
    )
}

}
export { PawsContextProvider, PawsContext }



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


// deleteMeme = (deletedMeme, id, index) => {
//     console.log("deleteMeme was clicked -- deletedMeme", deletedMeme)
//     console.log("deletedMemetid: ", id)
//     console.log("deletedMeme.url", deletedMeme.url)
//     this.setState(prevState => {
//       return {
//         myMemesList: prevState.myMemesList.filter(meme => meme.id !== id && meme.key === index)
//       }
//     })
//   }


// if (this.props.isEditing) this.props.editOrNot()