const express = require("express")
const voteRouter = express.Router()
const Vote = require("../models/vote")

// get all votes
voteRouter.get("/", (req, res, next) => {
    console.log(req)
    Vote.find((err, votes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(votes)
    })
})

// get votes by user id
voteRouter.get("/user", (req, res, next) => {
    Vote.find({ user: req.user._id}, (err, votes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(votes)
    })
})

// add new vote
voteRouter.post("/", (req, res, next) => {
    // req.body.user = req.user._id 
    const newVote = new Vote(req.body)
    newVote.user = req.user._id
    newVote.save((err, savedVote) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVote)
    })
})

// issueRouter.post("/", (req, res, next) => {
//     const issue = new Issue(req.body)
//     issue.user = req.user._id 
//     issue.save(function (err, newIssue) {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(newIssue)
//     })
// })
// update vote
voteRouter.put("/:voteId", (req, res, next) => {
    Vote.findOneAndUpdate(
        {_id: req.params.voteId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedVote) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedVote)
        }
    )
})


// delete vote
voteRouter.delete("/:voteId", (req, res, next) => {
    Vote.findOneAndDelete(
        {_id: req.params.voteId, user: req.user._id},
        (err, deletedVote) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted vote: ${deletedVote}`)
        }
    )
})

module.exports = voteRouter