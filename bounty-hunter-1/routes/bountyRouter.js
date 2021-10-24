const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")

// const { v4: uuidv4 } = require('uuid');

//Bounties - "Fake Data"
// const bounties = [
//     {
//         firstName: "Star",
//         lastName: "Smith",
//         isAlive: false,
//         bountyAmount: 300,
//         type: "Jedi",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Rick",
//         lastName: "Rockandroll",
//         isAlive: true,
//         bountyAmount: 5000,
//         type: "Sith",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Sling",
//         lastName: "Bling",
//         isAlive: true,
//         bountyAmount: 450,
//         type: "Jedi",
//         _id: uuidv4()
//     },


//     {
//         firstName: "Brave",
//         lastName: "Heart",
//         isAlive: true,
//         bountyAmount: 1000,
//         type: "Sith",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Daisy",
//         lastName: "Duchess",
//         isAlive: true,
//         bountyAmount: 2500,
//         type: "Jedi",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Trouble",
//         lastName: "Smith",
//         isAlive: true,
//         bountyAmount: 5500,
//         type: "Sith",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Chaos",
//         lastName: "Carter",
//         isAlive: true,
//         bountyAmount: 7500,
//         type: "Jedi",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Forever",
//         lastName: "Fighting",
//         isAlive: true,
//         bountyAmount: 2500,
//         type: "Sith",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Zap",
//         lastName: "Zest",
//         isAlive: true,
//         bountyAmount: 300,
//         type: "Jedi",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Dragon",
//         lastName: "Jones",
//         isAlive: true,
//         bountyAmount: 2500,
//         type: "Sith",
//         _id: uuidv4()
//     },

//     {
//         firstName: "Eagle",
//         lastName: "Foster",
//         isAlive: true,
//         bountyAmount: 200,
//         type: "Sith",
//         _id: uuidv4()
//     }
// ]



//GET ALL Request
bountyRouter.get("/", (req, res, next) => {
    // res.send(bounties)
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//GET ONE Request
bountyRouter.get("/:bountyId", (req, res) => {
    res.send(bounties)
})


//POST ONE Request
bountyRouter.post("/", (req, res, next) => {
    // const newBounty = req.body
    // newBounty._id = uuidv4()
    // bounties.push(newBounty)
    // res.send(newBounty)
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})


//DELETE ONE Request
//note: first object/argument in findOneAndDelete is the filtering criteria
bountyRouter.delete("/:bountyId", (req, res, next) => {
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id = bountyId)
    // bounties.splice(bountyIndex, 1)
    // res.send("Successfully deleted bounty!")
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Sucessfully deleted bounty ${deletedBounty.firstName} from the DB!`)
    })
})


//PUT Request - UPDATE ONE
bountyRouter.put("/:bountyId", (req, res, next) => {
    // const bountyId = req.params.bountyId
    // const bountyIndex = bounties.findIndex(bounty => bounty._id = bountyId)
    // const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    // res.send(updatedBounty)
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },  //find this one to update
        req.body,             //update the object with this data
        { new: true },      //send back the updated version please
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return (err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


module.exports = bountyRouter