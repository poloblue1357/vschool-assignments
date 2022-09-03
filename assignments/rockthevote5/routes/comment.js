const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/comment")
const Issue = require('../models/issue')
const mongoose = require("mongoose")

commentRouter.get("/", (req, res, next) => {
    // console.log(req)
    Comment.find( (err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        } 
        return res.send(comments)
    })
})

commentRouter.get("/:issueId", (req, res, next) => {
    Comment.find({ user: req.user._id}, (err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        } 
        return res.send(comments)
    })
})

commentRouter.post("/:issueId", (req, res, next) => {
    console.log(req.body.userString, "req.params")
    // if( !mongoose.Types.ObjectId.isValid(id) ) return false
    req.body.userString = req.user.username 
    const comment = new Comment(req.body)
    comment.user = req.user._id 
    comment.issue = req.params.issueId
    comment.save(function (err, newComment) {
        if (err) {
            res.status(500)
            return next(err)
        }
        Issue.findOneAndUpdate({_id: req.params.issueId}, 
            {
                $addToSet: {"comment": newComment._id}
        },
        ( err, x ) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newComment)
        }
        )
    })
})
// commentRouter.get("/issue/:issueId")
commentRouter.get("/:commentId", (req, res, next) => {
    Comment.findOne({ _id: req.params.commentId, user: req.user._id}, (err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        } else if (!comment) {
            res.status(404)
            return next(new Error("No comment found."))
        }
        return res.send(comment)
    })
})

commentRouter.get("/user", (req, res, next) => {
    Comment.find({ user: req.user._id}, (err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.put("/:commentId", (req, res, next) => {
    Comment.findOneAndUpdate(
        {_id: req.params.commentId, user: req.user._id},
        req.body, 
        { new: true },
        (err, comment) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(comment)
        }
    )
})

commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndRemove({ _id: req.params.commentId, user: req.user._id}, (err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(comment)
    })
})

module.exports = commentRouter