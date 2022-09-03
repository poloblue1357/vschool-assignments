const mongoose = require("mongoose")
const Schema = mongoose.Schema

const voteSchema = new Schema({
    voteCount: {
        type: Number
    },
    disable: {
        type: Boolean
    },
    disableDownVote: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Vote", voteSchema)