require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const expressJwt = require("express-jwt")
const path = require("path")

const port = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// mongoose.connect(process.env.MONGODB_URI,
//     {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true,
//         // useCreateIndex: true,
//         // useFindAndModify: false,
//     },
//     () => console.log("Connected to the DB.")    
// )
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use("/auth", require("./routes/auth.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"]})) // req.user
app.use("/api/issue", require("./routes/issue"))
app.use("/api/comment", require("./routes/comment"))
app.use("/api/vote", require("./routes/vote"))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("The server is running.")
})