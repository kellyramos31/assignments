const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const issueSchema = new Schema({
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
    voteCount: {
        type: Number
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    _comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]

})

module.exports = mongoose.model("Issue", issueSchema)