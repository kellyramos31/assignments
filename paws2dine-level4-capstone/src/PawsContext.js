import React, { Component } from "react"
import axios from "axios"


class PawsContext extends Component {

    state = {
        //need to create other arrays in state for dropdown menu info??  Figure out how to handle this.

        dogFriendlyRestaurants: [],
        myFaves: []
    }


    componentDidMount() {
        //Call to Yelp Fusion API to get business data:
        //Q:  Have to do multiple requests b/c limited to #  on each request??? [need to use offset]
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            },

            params: {
                location: "Salt Lake City",
                categories: "restaurants",  
                term:  "dog friendly",
                // limit: 50,
                // offset: 51

                //NOTE:  total of ~86 restaurants show up (b/c only 50 each request => do I need 2 requests to get all?? -- how structure this??)
                //need offset of 81?? Or maybe sort by rated & just return top 50 based on ratings??
                //other options = open_at, open_now 
                //ALSO:  options to sort by rating, review_count, distance
            }

                .then((res) => {
                    console.log(res)
                    this.setState ({
                        dogFriendlyRestaurants: [res]
                    })
                })
                .catch((err) => console.log(err))
        })
    }


//Something to handle dropdown menu choices??  Examples:  based on smaller geography; cuisine; price point; rating


    render() {

        return (
            <div>

            </div>

        )



    }

}
export default PawsContext