const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios")
require("dotenv").config()

const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    res.json("hi")
})

app.get("/eateries", (req, res) => {
  
    axios.get(
        `https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term="dog friendly"`,
        // `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term="dog friendly"`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            limit: 50,
            // offset: 11
          },
        }
      )
      .then((response) => {
        res.json(response.data.businesses);
      })

      .catch((err) => console.log(err));
});

        // this.setState({ dogFriendlyRestaurants: response.data.businesses });
app.get("/moreeats", (req,res) =>{
    axios.get(
          `https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term="dog friendly"`,
          // `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term="dog friendly"`,
          //     `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=Salt Lake City&categories=restaurants&term="dog friendly"}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            params: {
              limit: 50,
              offset: 51,
            },
          }
        )
      .then((response) => {
        res.json(response.data.businesses)
        // this.setState({
        //   dogFriendlyRestaurants: [
        //     ...this.state.dogFriendlyRestaurants,
        //     ...response.data.businesses,
        //   ],
        // });
        // this.addToggleProperty();
        // console.log("get request response", response);
      })
      .catch((err) => console.log(err));
    })

app.listen(8000, () => console.log(`Server running on ${PORT} `));
