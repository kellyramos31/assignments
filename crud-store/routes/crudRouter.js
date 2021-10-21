const express = require("express")
const crudRouter = express.Router()
const Inventory = require("../models/inventory.js")

// const { v4: uuidv4 } = require('uuid'); 

//Crud - "Fake Data"
// const inventories = [
//     {item: "toaster oven",
//      description:  "rusty, but still works",
//      price: 10,
//      _id: uuidv4()
// },

//     {item: "high top sneakers",
//      description:  "red, Converse & a little smelly",
//      price: 5,
//      _id: uuidv4()
// },

//     {item: "basketball",
//      description:  "bounces, but slow air leak",
//      price: 2,
//      _id: uuidv4()
// },

 
//     {item: "cowboy hat",
//      description:  "brown suede",
//      price: 15,
//      _id: uuidv4()
// },

//     {item: "kids skis",
//      description:  "Rossignol",
//      price: 50,
//      _id: uuidv4()
// },

//     {item: "headphones",
//      description:  "pink",
//      price: 3,
//      _id: uuidv4()
// },
        
//     {item: "bicycle",
//      description:  "blue with flat tires",
//      price: 12,
//      _id: uuidv4()
// },

//     {item: "mittens",
//      description:  "purple with holes",
//      price: 4,
//      _id: uuidv4()
// }
// ]



//GET ALL Request
crudRouter.get("/", (req, res, next)=>{
    Inventory.find((err, inventories)=> {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//GET ONE Request


//POST ONE Request
crudRouter.post("/", (req, res, next)=>{
    const newCrud = new Inventory(req.body)
    newCrud.save((err, savedCrud)=>{
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(201).send(savedCrud)

    })
})


//DELETE ONE Request
crudRouter.delete("/:crudId", (req, res)=>{
    Inventory.findOneAndDelete({_id: req.params.crudId}, (err, deletedCrud)=>{
        if(err){
            res.status(500)
            return next(err)
        }
    
        return res.status(200).send(`Successfully deleted ${deletedCrud.item} from the DB`)

    })
})


//PUT Request - UPDATE ONE
crudRouter.put("/:crudId", (req, res, next)=>{
   Inventory.findOneAndUpdate(
       { _id:  req.params.crudId },    //find this one to update
       req.body,                     //update the object with this data
       { new: true },               //send back the updated version please :)
       (err, updatedCrud)=>{
           if(err){
            res.status(500)
            return next(err)
        }
    
        return res.status(201).send(updatedCrud)
       }
       )


})


module.exports = crudRouter
