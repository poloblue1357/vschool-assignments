const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    userString: {
        type: String,
        required: true
    },
    upVoteUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downVoteUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports = mongoose.model("Issue", issueSchema)