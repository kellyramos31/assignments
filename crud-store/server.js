const { application } = require("express")
const express = require("express")


//Middleware
app.use(express.json())   //looks for a request body and turns it into a req.body


//Routes



app.listen(9000, ()=> {
    console.log("The server is running on port 9000.")
})