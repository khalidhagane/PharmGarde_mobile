require('dotenv').config()
const dbConnect = require('./config/config')
const express = require('express')

dbConnect()

const app = express()

// routes
const pharmacyRouter = require('./routes/pharmacy')

app.use('/api/pharmacy', pharmacyRouter)

app.listen(process.env.PORT, () => console.log('Server running on port 5000') )

