const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); 



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



//GET ALL Request
bountyRouter.get("/", (req, res)=>{
    res.send(bounties)
})

//POST ONE Request
bountyRouter.post("/", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send("newBounty successfully added!")
})


//DELETE ONE Request
bountyRouter.delete("/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty=>bounty._id = bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})


//PUT Request
// bountyRouter.put()


module.exports = bountyRouter