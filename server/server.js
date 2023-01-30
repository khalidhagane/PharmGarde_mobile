require("dotenv").config()
const dbConnect = require("./config/config")
const express = require("express")
const errorHandler = require("./middlewares/errorHandler")
const cors = require("cors")

dbConnect()

const app = express()

// routes
const pharmacyRouter = require("./routes/pharmacy")
const reviewRouter = require("./routes/ReviewRouters")
const commentRouter = require("./routes/CommentRouters")
// const searchRouter = require('./routes/searchRouters')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

app.use("/api/pharmacy", pharmacyRouter)
app.use("/api/review", reviewRouter)
app.use("/api/comment", commentRouter)
// app.use('/api/search' , searchRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log("Server running on port 5000"))

module.exports = app
