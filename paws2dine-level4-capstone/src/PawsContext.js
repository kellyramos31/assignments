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

//NOTE:  should I change this class component to functional component & deploy useState throughout?????


class PawsContextProvider extends Component {

    state = {
        results1: [],
        results2: [],
        dogFriendlyRestaurants: [],
        searchText: "",
        filteredSearchList: [],
        oneDollarSign: [],
        twoDollarSigns: [],
        threeDollarSigns: [],
        myDoggieImage: "",
        isHearted: false,
        isChangingPhoto: false,
        myFaves: []
    }



// NOTE: got limit to 50 -- how structure request(s) to get the balance of businesses into one array?  Need to be 2 separate requests??

// From Postman:  url for 51-100 data records:  
// https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly&limit=50&offset=51

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

        //  .then (axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly}`, {

        //     headers: {
        //         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        //     }
        //     ,

        //     params: {
        //         limit: 50,
        //         offset: 51
        //     }
        // }))



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



// componentDidMount() {
//     console.log("component did mount working")
//     Promise.all([
//         this.dataResults1(),
//         this.dataResults2()
//     ])
    
//     // .then(res=>{
//     //    console.log("res", res)  //undefined right now
//     // })

//     .then (res=>{

//         const firstData = res[0].data.businesses
//         const secondData = res[1].data.businesses

//         this.setState({
//            dogFriendlyRestaurants: [...firstData, ...secondData]
//        })
//     })
//     .catch(err => console.log(err))
          
// }



   addToggleProperty = () => {
        let addedProperty = this.state.dogFriendlyRestaurants.map((restaurant)=>{
            restaurant.isHearted = false
            restaurant.myDoggieImage = ""
            return restaurant
        })
        console.log("data with isHearted added:", addedProperty)
        this.setState({
            dogFriendlyRestaurants: addedProperty,
            filteredSearchList:  addedProperty
        })
    }
    
    //Switch statement to display Yelp Stars ratings 
    //(NOTE:  leave breaks in even though "unreachable code" warning)

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


handleFaveToggle = (id)=>{
            console.log(id)
            const updatedDogFriendly = this.state.dogFriendlyRestaurants.map((business)=>{

                if(business.id === id) {
                    const updatedListing = {
                        ...business,
                        isHearted: !business.isHearted
                    }
                    return updatedListing
                }
                return business
            })
    
            this.setState({
                dogFriendlyRestaurants: updatedDogFriendly,
                filteredSearchList: updatedDogFriendly,
                isHearted: !this.state.isHearted
            })

        }


handleFave = (id, restaurant, address, city, phone, isHearted) => {
    console.log("current isHearted state:", isHearted)
    this.handleFaveToggle(id)
    console.log("id:", id)  
 
    const newFave = {
        id: id,
        name: restaurant,
        address: address,
        city: city,  
        phone: phone,
        isHearted: !isHearted,
        myDoggieImage: ""
    }

       console.log("newFave is:", newFave)
       console.log("newFave.isHearted:", newFave.isHearted)
       console.log("current isHearted state", this.state.isHearted)

if (newFave.isHearted === true){
    this.handleFaveToggle(id)
    
   
    this.setState (prevState=> {
        return {
            myFaves:  [...prevState.myFaves, newFave]
        }
    })
    // this.createPricingButtonData()
       
} else if (newFave.isHearted === false) {
    this.handleFaveDelete(id)
    // this.createPricingButtonData()
}

}         
 
handleFaveDelete = (id) => {
    console.log("delete this id", id)

    this.setState(prevState => {
      return {
        myFaves: prevState.myFaves.filter(fave=> fave.id !== id)
      }
    })
   
    this.handleFaveToggle(id)
  }


searchBarOnChange = (searchTerm) => {
    console.log("searchText", searchTerm)
    this.setState ({
        searchText: searchTerm
    })
    this.getSearchFilteredList(searchTerm)
    
    console.log("this.state.searchText", this.state.searchText)
}    

getSearchFilteredList = (searchText) => {
   if (searchText !== ""){
       const searchResults = this.state.dogFriendlyRestaurants.filter((restaurant)=>
           restaurant.name.toString().toLowerCase().includes(searchText.toLowerCase())
       )
       this.setState ({
           filteredSearchList: searchResults
       })
    } else {
       this.setState({
           searchText: "",
           filteredSearchList: this.state.dogFriendlyRestaurants
       })
    }
  
    }


handlePriceClickOne = () => {
const  oneDollar = this.state.dogFriendlyRestaurants.filter(business=>business.price === "$")
    this.setState ({
        filteredSearchList: oneDollar
    })
}


handlePriceClickTwo= (e) => {
    const twoDollar = this.state.dogFriendlyRestaurants.filter(business=>business.price === "$$")
    this.setState ({
        filteredSearchList: twoDollar
    })
    
}

handlePriceClickThree= (e) => {
    const threeDollar = this.state.dogFriendlyRestaurants.filter(business=>business.price === "$$$")
    this.setState ({
        filteredSearchList: threeDollar
    })
    
}

handleClickAll= (e) => {
    this.setState ({
        filteredSearchList: this.state.dogFriendlyRestaurants
    })
    
}

handleMoreRestaurants = (e) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly}`, {

            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
            ,

            params: {
                limit: 50,
                offset: 51
            }
        })

          .then(res => {
                console.log("axios GET/component did mount working")
                console.log(res.data)

                this.setState({
                    dogFriendlyRestaurants: [...res.data.businesses]
                })

                this.addToggleProperty()

                this.setState({

                })
    
            })
            
            .catch(err => console.log(err))

}

handleOriginalRestaurantsAgain = (e)=> {
         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term=dog friendly}`, {

            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
            ,

            params: {
                limit: 50
         
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

//Something to handle dropdown menu choices??  Examples:  based on smaller geography; cuisine; price point; rating


handlePhotoFormToggle = (id) => {
    console.log("toggled for Photo id", id)

    this.setState ({
            isChangingPhoto:  {
                ...this.state.isChangingPhoto, 
                [id]: !this.state.isChangingPhoto[id]
            }
    })
    console.log("isChangingPhoto state (after second click)", this.state.isChangingPhoto )    
}

handlePhotoFormChange = (id, myDoggieImage) =>{
    console.log(id)
    this.setState ({
        myDoggieImage: myDoggieImage
    })
    console.log("myDoggieImage URL from input", this.state.myDoggieImage)
}

handleMyDogPhotoSubmit = (e, id, name, address, city, phone, isHearted, myDoggieImage)=> {
e.preventDefault()
console.log("HEY")
console.log("change/add photo for this id", id)
// console.log("here's index for this id", index)

      const updatedPhotoListing = {
            id: id,
            name: name,
            address: address,
            city: city,
            phone: phone,
            isHearted: isHearted,
            myDoggieImage: myDoggieImage
        }
        console.log("updated Photo Listing object", updatedPhotoListing)
    
  
    const editedFavesWithPhoto = this.state.myFaves.map((fave=> fave.id === id ? updatedPhotoListing : fave))
    console.log("updatedPhotoListing id:", updatedPhotoListing.id) //this is consoling properly
    console.log("editFavesWithPhoto result of map:", editedFavesWithPhoto)    //empty array here
     
         this.setState({
            myFaves: [...editedFavesWithPhoto],
            myDoggieImage:  ""
        })

    this.handlePhotoFormToggle(id)
        
    }

 

render() {

    return (
        <PawsContext.Provider value={{
            dogFriendlyRestaurants: this.state.dogFriendlyRestaurants,
            yelpStars: this.yelpStars,
            handleFave: this.handleFave,
            myFaves: this.state.myFaves,
            searchBarOnChange: this.searchBarOnChange,
            searchText: this.state.searchText,
            getSearchFilteredList: this.getSearchFilteredList,
            filteredSearchList: this.state.filteredSearchList,
            handleFaveDelete: this.handleFaveDelete,
            myDoggieImage: this.state.myDoggieImage,
            isChangingPhoto:  this.state.isChangingPhoto,
            handlePhotoFormChange: this.handlePhotoFormChange,
            togglePhotoEdit: this.togglePhotoEdit,
            handlePhotoFormToggle: this.handlePhotoFormToggle,
            handleMyDogPhotoSubmit: this.handleMyDogPhotoSubmit,
            handlePriceClickOne: this.handlePriceClickOne,
            handlePriceClickTwo: this.handlePriceClickTwo,
            handlePriceClickThree: this.handlePriceClickThree,
            handleClickAll: this.handleClickAll,
            // handleMoreRestaurants: this.handleMoreRestaurants,
            // handleOriginalRestaurantsAgain: this.handleOriginalRestaurantsAgain
        }}
        >
            {this.props.children}
        </PawsContext.Provider>
    )
}

}
export { PawsContextProvider, PawsContext }




