// import { v4 as uuidv4 } from 'uuid';

//Server
const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid'); 

app.use(express.json())  //Looks for request body and turns it into req.body

//ROUTES
app.use("/todos", require("./routes/todosRouter.js"))





app.listen(6800, ()=>{
    console.log("The server is running on PORT 6800!")
})
