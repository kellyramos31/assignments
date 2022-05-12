const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const questionSchema = new Schema({
    categorySTEM: {
        type: String,
        required: true
        },
    answer: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    questionOptions: [
        {
         questionText: {
            type: String,
            required: true
         },
         isCorrect: {
            type: Boolean,
            required: true,
            defaultValue: false
         },
      
        }
    ]
    //   _user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },
})

// const autoPopulateUser  = function(next) {
//     this.populate({
//         path: "_user",
//         select: "username _id"
//     })
//     next()
//     }

// questionSchema.pre("find", autoPopulateUser)


module.exports = mongoose.model("Question", questionSchema)