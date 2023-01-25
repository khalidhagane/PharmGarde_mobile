require('dotenv').config()
const dbConnect = require('./config/config')
const express = require('express')

dbConnect()

const app = express()

// routes
const pharmacyRouter = require('./routes/pharmacy')
const reviewRouter = require('./routes/ReviewRouters')
const commentRouter = require('./routes/CommentRouters')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/pharmacy', pharmacyRouter)
app.use('/api/review', reviewRouter)
app.use('/api/comment' , commentRouter)

app.listen(process.env.PORT, () => console.log('Server running on port 5000') )

