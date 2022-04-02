const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const learnSchema = new Schema({
    title: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    quote: {
        type: String
    },
    categorySTEM: {
        type: String,
        required: true
    },
    born: {
        type: Date
    },
    alive: {
        type: Boolean,
        required: true,
        defaultValue: true
    },
    profession: {
        type: String,
        required: true
    },
    bestKnownFor: {
        type: String,
        required: true
    },
    accomplishment1: {
        type: String,
        required: true
    },
    accomplishment2: {
        type: String
    },
    accomplishment3: {
        type: String
    },
    quote1:  {
        type: String
    },
    quote2: {
        type: String
    }
})

// const autoPopulateUser  = function(next) {
//     this.populate({
//         path: "_user",
//         select: "username _id"
//     })
//     next()
//     }

// learnSchema.pre("find", autoPopulateUser)


module.exports = mongoose.model("Learn", learnSchema)