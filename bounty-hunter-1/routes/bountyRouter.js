const express = require("express")
const bountyRouter = express.Router()


const { v4: uuidv4 } = require('uuid'); 

//Bounties - "Fake Data"
const bounties = [
    {firstName: "Star",
     lastName:  "Smith",
     alive: false,
     bountyAmount:  300,
     type: "Jedi",
     _id: uuidv4()
},

    {firstName: "Rick",
     lastName:  "Rockandroll",
     alive: true,
     bountyAmount:  5000,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Sling",
     lastName:  "Bling",
     alive: true,
     bountyAmount:  450,
     type: "Jedi",
     _id: uuidv4()
    },

 
    {firstName: "Brave",
     lastName:  "Heart",
     alive: true,
     bountyAmount:  1000,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Daisy",
     lastName:  "Duchess",
     alive: true,
     bountyAmount:  2500,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Trouble",
     lastName:  "Smith",
     alive: true,
     bountyAmount:  5500,
     type: "Sith",
     _id: uuidv4()
    },
        
    {firstName: "Chaos",
     lastName:  "Carter",
     alive: true,
     bountyAmount:  7500,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Forever",
     lastName:  "Fighting",
     alive: true,
     bountyAmount:  2500,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Zap",
     lastName:  "Zest",
     alive: true,
     bountyAmount:  300,
     type: "Jedi",
     _id: uuidv4()
    },

    {firstName: "Dragon",
     lastName:  "Jones",
     alive: true,
     bountyAmount:  2500,
     type: "Sith",
     _id: uuidv4()
    },

    {firstName: "Eagle",
     lastName:  "Foster",
     alive: true,
     bountyAmount:  200,
     type: "Sith",
     _id: uuidv4()
    }
]



//GET ALL Request
bountyRouter.get("/", (req, res)=>{
    res.send(bounties)
})

//GET ONE Request


//POST ONE Request
bountyRouter.post("/", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})


//DELETE ONE Request
bountyRouter.delete("/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=>bounty._id = bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})


//PUT Request - UPDATE ONE
bountyRouter.put("/:bountyId", (req, res)=>{
   const bountyId = req.params.bountyId
   const bountyIndex = bounties.findIndex(bounty=>bounty._id = bountyId)
   const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
   res.send(updatedBounty)
})


module.exports = bountyRouter