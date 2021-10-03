//Server
const express = require("express")
const app = express()
// const { v4: uuidv4 } = require('uuid'); 

app.use(express.json())  //Looks for request body and turns it into req.body

//ROUTES
app.use("/clothes", (req, res, next)=>{
    console.log("The MIDDLEWARE was executed.")
    next()
})

app.use("/clothes", (req, res, next)=>{
    req.body = {
            type: "shirt",
            color: "royal blue",
            size:  8
}
    next()
})

app.get("/clothes", (req, res, next)=>{
    console.log("GET request received.")
    res.send (req.body)
})

app.listen(7000, ()=>{
    console.log("The server is running on PORT 7000!")
})