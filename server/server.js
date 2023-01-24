require('dotenv').config()
const dbConnect = require('./config/config')
const express = require('express')
const errorHandler = require('./middlwares/errorHandler')

dbConnect()

const app = express()

// routes
const pharmacyRouter = require('./routes/pharmacy')

app.use('/api/pharmacy', pharmacyRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log('Server running on port 5000') )

