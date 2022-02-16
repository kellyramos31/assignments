
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }
})

const autoPopulateUser  = function(next) {
    this.populate({
        path: "_user",
        select: "username createdAt -_id"
    })
    next()
    }

commentSchema.pre("findOne", autoPopulateUser)

module.exports = mongoose.model("Comment", commentSchema)