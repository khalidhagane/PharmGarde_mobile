require("dotenv").config()
const { dbConnect } = require("./config/config")
const express = require("express")
const colors = require("colors")
const session = require("express-session")
const csrf = require("csurf")
const passport = require("./passport")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const createError = require("http-errors")
const path = require("path")
const localStrategy = require("passport-local")
const bodyParser = require("body-parser")
const User = require("./models/User")
const MongoStore = require("connect-mongo")
const errorHandler = require("./middlewares/errorHandler")
const cors = require("cors")

dbConnect()
const app = express()
app.locals.pluralize = require("pluralize")

app.use(logger("dev"))
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
)

app.post("/process", function (req, res) {
    res.send("data is being processed")
})

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.DB_URL,
            collectionName: "sessions",
            ttl: 60 * 60 * 24 * 7, // 1 week
        }),
        cookie: { maxAge: 60000 },
    })
)

app.use(passport.initialize())
app.use(passport.session())

const authRouter = require("./routes/auth")
const pharmacyRouter = require("./routes/pharmacy")
const reviewRouter = require("./routes/ReviewRouters")
const commentRouter = require("./routes/CommentRouters")

app.use("/api/auth", authRouter)
app.use("/api/pharmacy", pharmacyRouter)
app.use("/api/review", reviewRouter)
app.use("/api/comment", commentRouter)

app.use(function (req, res, next) {
    next(createError(404))
})

// app.use('/api/search' , searchRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () =>
    console.log("Server running on port 5000".bgGreen.bold)
)
module.exports = app

module.exports = app
