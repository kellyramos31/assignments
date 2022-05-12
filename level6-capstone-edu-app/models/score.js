const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const scoreSchema = new Schema({
    rewardBadges: [
        {
         imageURL: {
            type: String
         }
        }
    ],
    scoreHistory: [
        {
         scoreTotal: {
            type: Number
         }
        }
    ],

    _user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const autoPopulateUser  = function(next) {
    this.populate({
        path: "_user",
        select: "username _id"
    })
    next()
    }

scoreSchema.pre("find", autoPopulateUser)


module.exports = mongoose.model("Score", scoreSchema)