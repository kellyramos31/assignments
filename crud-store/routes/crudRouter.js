const express = require("express")
const crudRouter = express.Router()

const { v4: uuidv4 } = require('uuid'); 

//Crud - "Fake Data"
const inventories = [
    {item: "toaster oven",
     description:  "rusty, but still works",
     price: 10,
     _id: uuidv4()
},

    {item: "high top sneakers",
     description:  "red, Converse & a little smelly",
     price: 5,
     _id: uuidv4()
},

    {item: "basketball",
     description:  "bounces, but slow air leak",
     price: 2,
     _id: uuidv4()
},

 
    {item: "cowboy hat",
     description:  "brown suede",
     price: 15,
     _id: uuidv4()
},

    {item: "kids skis",
     description:  "Rossignol",
     price: 50,
     _id: uuidv4()
},

    {item: "headphones",
     description:  "pink",
     price: 3,
     _id: uuidv4()
},
        
    {item: "bicycle",
     description:  "blue with flat tires",
     price: 12,
     _id: uuidv4()
},

    {item: "mittens",
     description:  "purple with small holes",
     price: 4,
     _id: uuidv4()
}
]



//GET ALL Request
crudRouter.get("/", (req, res)=>{
    res.send(inventories)
})

//GET ONE Request


//POST ONE Request
crudRouter.post("/", (req, res)=>{
    const newCrud = req.body
    newCrud._id = uuidv4()
    inventories.push(newCrud)
    res.send(newCrud)
})


//DELETE ONE Request
crudRouter.delete("/:crudId", (req, res)=>{
    const crudId = req.params.crudId
    const crudIndex = inventories.findIndex(crud=>crud._id = crudId)
    inventories.splice(crudIndex, 1)
    res.send("Successfully deleted crud!")
})


//PUT Request - UPDATE ONE
crudRouter.put("/:crudId", (req, res)=>{
   const crudId = req.params.crudId
   const crudIndex = inventories.findIndex(crud=>crud._id = crudId)
   const updatedCrud = Object.assign(inventories[crudIndex], req.body)
   res.send(updatedCrud)
})


module.exports = crudRouter
