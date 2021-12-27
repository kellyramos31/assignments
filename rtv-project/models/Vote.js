const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const voteSchema = new Schema({
    upVote: {
        type: Number
    },
    downVote: {
        type: Number
    },
    totalVotes: {
        type: Number
    }

})


module.exports = mongoose.model("Vote", voteSchema)