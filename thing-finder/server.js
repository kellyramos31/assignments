//Server
const express = require("express")
const app = express()

const { v4: uuidv4 } = require('uuid')

app.use(express.json())  //Looks for request body and turns it into req.body

//ROUTES
app.use("/coffees", require("./routes/coffeeRouter.js"))

app.use("/foods", require("./routes/foodRouter.js"))

app.listen(8000, ()=>{
    console.log("The server is running on PORT 8000!")
})