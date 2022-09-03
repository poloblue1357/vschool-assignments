const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

const secret = process.env.SECRET || "boat rodeo diamond cup"

// authRouter.post("/signup", (req, res, next) => {
//     User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         } else if (user !== null) {
//             res.status(400)
//             return next(new Error("That username already exists."))
//         }
//         const newUser = new User(req.body)
//         newUser.save((err, user) => {
//             if (err) return res.status(500).send({success: false, err})
//             const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//             return res.status(201).send({ user: user.withoutPassword(), token})
//         })
//     })
// })

// authRouter.post("/login", (req, res) => {
//     User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//         if (err) return res.status(500).send(err)
//         if (!match) return res.status(401).send({ success: false, message: "Username or password is incorrect."})
//         const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//         return res.send({ token: token, user: user.withoutPassword(), success: true})
//     })
// })

// Signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(user){
        res.status(403)
        return next(new Error("That username is already taken"))
      }
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
                              // payload,            // secret
        const token = jwt.sign(savedUser.withoutPassword(), secret)
        return res.status(201).send({ token, user: savedUser.withoutPassword() })
      })
    })
  })

  // Login
authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(!user){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }

      user.checkPassword(req.body.password, (err, isMatch) => {
        if(err){
          res.status(403)
          return next(new Error("Username or Password are incorrect"))
        }
        if(!isMatch){
          res.status(403)
          return next(new Error("Username or Password are incorrect"))
        }
      const token = jwt.sign(user.withoutPassword(), secret)
      return res.status(200).send({ token, user: user.withoutPassword() })
    })
  })
})

module.exports = authRouter