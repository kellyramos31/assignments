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
    //maybe voteCount should be array of userIds instead of just #?
    //need a net votes count??
    upVotes: {
        type: Number
    },
    downVotes: {
        type: Number
    },
    totalVotersVotedCount: {
        type: Number
    },
    _voters: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
       _comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
})


  

module.exports = mongoose.model("Issue", issueSchema)