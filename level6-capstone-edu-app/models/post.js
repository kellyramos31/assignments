const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./comment.js");



const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    numberCommentsOnPost: {
        type: Number,
        min: 0
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    _comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
})


const autoPopulateUser  = function(next) {
    this.populate({
        path: "_user",
        select: "username _id"
    })
    next()
    }

postSchema.pre("find", autoPopulateUser)


module.exports = mongoose.model("Post", postSchema)