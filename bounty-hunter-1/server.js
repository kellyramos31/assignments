// import { v4 as uuidv4 } from 'uuid';

//Server
const express = require("express")
const app = express()
const morgan = require("morgan")


//Middleware (for every request)
app.use(express.json())  //Looks for request body and turns it into req.body
app.use(morgan("dev"))   //Logs requests to the console

//ROUTES
app.use("/bounties", require("./routes/bountyRouter.js"))



app.listen(9000, ()=>{
    console.log("The server is running on PORT 9000!")
})