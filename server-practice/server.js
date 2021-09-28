//First Express Server Practice
const express = require("express")
const app = express()

// arguments for get request:  1. Endpoint (mount path); 2. callback function
//req = request; res = response
app.get("/userdata", (req, res)=>{
    res.send({name: "Joe", age: 20})
})



// app.put()
// app.post()
// app.delete()


//.listen needs 2 arguments:  1) Port; 2) callback function
app.listen(9000, ()=> {
    console.log("The server is running on Port 9000.")
})


//***ALSO:  nodemon package installed so do not have to keep restarting server manually -- easier than having to re-start each time