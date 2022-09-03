const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
// const PORT = process.env.PORT || 5000
const expressJwt = require("express-jwt")

app.use(morgan("dev"))
app.use(express.json())

//connect to db
// mongoose.set("useCreateIndex", true)
// mongoose.connect(
//     "mongodb://localhost:27017/todo-auth-example",
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err) => {
//         if (err) throw err
//         console.log("Connected to the database")
//     }
// )
mongoose.connect("mongodb://localhost:27017/authpractice9db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB.")
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })) // req.user - payload
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// app.listen(PORT, () => {
//     console.log(`[+] Starting server on port ${PORT}`)
// })
app.listen(8000, () => {
    console.log("The server is running on Port 8000.")
})
