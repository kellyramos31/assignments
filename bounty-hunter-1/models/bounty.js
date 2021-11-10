const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Bounty Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isAlive: {
        type: String
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    checked: {
        type: String
    }
})

module.exports = mongoose.model("Bounty", bountySchema)