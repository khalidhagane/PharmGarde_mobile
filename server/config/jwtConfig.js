const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

module.exports = {
    secret: process.env.JWT_SECRET,
    jwtSession: {
        session: false
    }
};