const express = require("express")
const crudRouter = express.Router()
const Inventory = require("../models/inventory.js")



//GET ALL Request
crudRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})

//GET ONE Request
crudRouter.get("/:crudId", (req, res, next) => {
    Inventory.findOne({ _id: req.params.crudId }, (err, singleCrud) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully found the item ${singleCrud.item}`)
    })
})


//POST ONE Request
crudRouter.post("/", (req, res, next) => {
    const newCrud = new Inventory(req.body)
    newCrud.save((err, savedCrud) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        return res.status(201).send(savedCrud)

    })
})


//DELETE ONE Request
crudRouter.delete("/:crudId", (req, res) => {
    Inventory.findOneAndDelete({ _id: req.params.crudId }, (err, deletedCrud) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        return res.status(200).send(`Successfully deleted ${deletedCrud.item} from the DB`)

    })
})


//PUT Request - UPDATE ONE
crudRouter.put("/:crudId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.crudId },    //find this one to update
        req.body,                     //update the object with this data
        { new: true },               //send back the updated version please :)
        (err, updatedCrud) => {
            if (err) {
                res.status(500)
                return next(err)
            }

            return res.status(201).send(updatedCrud)
        }
    )


})


module.exports = crudRouter
