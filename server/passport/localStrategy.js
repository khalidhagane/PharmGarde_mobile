const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const strategy = new LocalStrategy (
    {
        usernameField: 'email' , // not necessary, DEFAULT
        passwordField: 'password' // not necessary, DEFAULT
    },
    function(email, password, done) {
        	User.findOne({ 'email': email }, async (err, User) => {
			if (err) {
                return done(err)
            }
            if (!User) {
                return done(null, false, { message: 'Incorrect email' })
            }
            const isMatch = await bcrypt.compare(password, User.password)
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password' })
            }
			return done(null, User)
		})
    }
)
        
        

module.exports = strategy

