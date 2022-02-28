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
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    _issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    }
})

const autoPopulateUser  = function(next) {
    this.populate({
        path: "_user",
        select: "username -_id"
    })
    next()
    }

commentSchema.pre("find", autoPopulateUser)

module.exports = mongoose.model("Comment", commentSchema)