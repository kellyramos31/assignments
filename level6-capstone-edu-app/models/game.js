const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    categorySTEM: {
        type: String,
        required: true
        },
    answer: {
        type: String,
        required: true
    },
    questions: [
        {
         questionText: {
            type: String,
            required: true
         },
         isCorrect: {
            type: Boolean,
            required: true,
            defaultValue: false
         }
        }
    ]
})

// const autoPopulateUser  = function(next) {
//     this.populate({
//         path: "_user",
//         select: "username _id"
//     })
//     next()
//     }

// learnSchema.pre("find", autoPopulateUser)


module.exports = mongoose.model("Game", gameSchema)