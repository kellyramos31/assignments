// import { v4 as uuidv4 } from 'uuid';

//Server
const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid'); 

app.use(express.json())  //Looks for request body and turns it into req.body

// const uuid = require("uuid")  if use this with just "uuid in the _id property, then returns empty id with just zeroes"

//from documentation:
// const { v4: uuidv4 } = require('uuid'); 

//then says to use uuidv4() //this also crashes the nodemon app


//Add unique ID property with uuid
// const uuid = require("uuid/v4") //from video -- but not working in combo with uuid() -- crashes the nodemon app


//Bounties - "Fake Data"
const bounties = [
    {firstName: "Star",
     lastName:  "Smith",
     living: true,
     bountyAmount:  300,
     type: "Jedi",
     _id: uuidv4()
},

    {firstName: "Rick",
     lastName:  "Rockandroll",
     living: true,
     bountyAmount:  5000,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Sling",
     lastName:  "Bling",
     living: true,
     bountyAmount:  450,
     type: "Jedi",
     _id: uuidv4()
    },

 
    {firstName: "Brave",
     lastName:  "Heart",
     living: true,
     bountyAmount:  1000,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Daisy",
     lastName:  "Duchess",
     living: true,
     bountyAmount:  2500,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Trouble",
     lastName:  "Smith",
     living: true,
     bountyAmount:  5500,
     type: "Sith",
     _id: uuidv4()
    },
        
    {firstName: "Chaos",
     lastName:  "Carter",
     living: true,
     bountyAmount:  7500,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Forever",
     lastName:  "Fighting",
     living: true,
     bountyAmount:  2500,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Zap",
     lastName:  "Zest",
     living: true,
     bountyAmount:  300,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Dragon",
     lastName:  "Jones",
     living: true,
     bountyAmount:  2500,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Eagle",
     lastName:  "Foster",
     living: true,
     bountyAmount:  200,
     type: "Sith",
     _id: uuidv4()
    }
]

//ROUTES

//GET Request
app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

//POST Request
app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send("newBounty successfully added!")
})


//DELETE Request
// app.delete()

//PUT Request
// app.put()


app.listen(9000, ()=>{
    console.log("The server is running on PORT 9000!")
})