// import { v4 as uuidv4 } from 'uuid';

//Server
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


//Middleware (for every request)
app.use(express.json())  //Looks for request body and turns it into req.body
app.use(morgan("dev"))   //Logs requests to the console

//Connect to database
//note: whatever comes after 27017/ becomes the name of the DB
//question:  is the deprecation object still necessary?  Not listed on mongoose site same as video anymore

mongoose.connect("mongodb://localhost:27017/bountiesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB!")
)

//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))



app.listen(9000, () => {
    console.log("The server is running on PORT 9000!")
})