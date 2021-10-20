const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


//Middleware
app.use(express.json())   //looks for a request body and turns it into a req.body
app.use(morgan("dev"))    //logs requests to the console

//Connect to database
mongoose.connect("mongodb://localhost:27017/inventoriesdb")

//Routes
app.use("./inventories", require("./routes/crudRouter.js", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    },
    ()=>console.log("Connected to the DB")
))


//Error Handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, ()=> {
    console.log("The server is running on port 9000.")
})