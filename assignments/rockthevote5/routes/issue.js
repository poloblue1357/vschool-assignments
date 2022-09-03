const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/issue")
const Comment = require("../models/comment")

issueRouter.get("/", (req, res, next) => {
    // console.log(req.body)
    Issue.find((err, issues) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
  })

// issueRouter.get("/", (req, res, next) => {
//     Issue.find({ user: req.user._id}, (err, issues) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         } 
//         return res.send(issues)
//     })
// })

issueRouter.post("/", (req, res, next) => {
    req.body.userString = req.user.username 
    req.body.user = req.user._id
    console.log(req.body)
    const issue = new Issue(req.body)
    issue.save(function (err, newIssue) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newIssue)
    })
    // console.log(req)
})

issueRouter.get("/:issueId", (req, res, next) => {
    // console.log(req.params)
    Issue.findOne({ _id: req.params.issueId, user: req.user._id}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        } else if (!issue) {
            res.status(404)
            return next(new Error("No issue found."))
        }
        return res.send(issue)
    })
})

issueRouter.get("/user/allIssues", (req, res, next) => {
    Issue.find({ user: req.user._id}, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.put("/:issueId", (req, res, next) => {
    req.body.userString = req.user.username 
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},  // find this one to update
        req.body, // update the object with this data
        { new: true }, // send back the updated version please
        (err, issue) => {
            if (err) {
                console.log("Error")
                res.status(500)
                return next(err)
            }
            return res.send(issue)
        }
    )
})

issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId, user: req.user._id}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(issue)
    })
})

issueRouter.put("/:issueId/upVote", (req, res, next) => {
    Issue.findOneAndUpdate({_id: req.params.issueId}, 
        {
            $addToSet: {"upVoteUsers": req.user._id},
            $pull: {"downVoteUsers": req.user._id}
        },
        {new: true},
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
        )
})

issueRouter.put("/:issueId/downVote", (req, res, next) => {
    Issue.findOneAndUpdate({_id: req.params.issueId}, 
        {
            $addToSet: {"downVoteUsers": req.user._id},
            $pull: {"upVoteUsers": req.user._id}
        },
        {new: true},
        (err, updatedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
        )
})
// issueRouter.put("/:issueId/comment", (req, res, next) => {
//     req.body.userId = req.user._id 
//     req.body.username = req.user.username 
//     req.body.issueId = req.params.issueId
//     const newComment = new Issue.comment(req.body)
//     newComment.save(
//         (err, comment) => {
//             if(err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(comment)
//         }
//     )
// })

module.exports = issueRouter