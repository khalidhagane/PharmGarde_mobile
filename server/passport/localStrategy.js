const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const strategy = new LocalStrategy (
    {
        usernameField: 'email' , // not necessary, DEFAULT
        passwordField: 'password' // not necessary, DEFAULT
    },
    function(email, password, done) {
        console.log('user %s attempting to authenticated', email);
        	User.findOne({ 'email': email }, (err, User) => {
			if (err) {
                console.log('err :>> ' );
                return done(err)
            }
            if (!User) {
                console.log('userMatch :>> ' );
                return done(null, false, { message: 'Incorrect email' })
            }
            const isMatch = bcrypt.compare(password, User.password)
            if (!isMatch) {
                console.log('password :>> ' );
                return done(null, false, { message: 'Incorrect password' })
            }
            console.log('done :>> ' , User);
			return done(null, User)
		})



    }
)
        
        

module.exports = strategy


// (
//     //  use console log 
     
// 	{
// 		emailField: 'email' // not necessary, DEFAULT
// 	},
// 	function(email, password, done) {
//         console.log('testoooo :>> ' );
// 		User.findOne({ 'local.email': email }, (err, userMatch) => {
// 			if (err) {
//                 console.log('err :>> ' );
// 				return done(err)
// 			}
// 			if (!userMatch) {
//                 console.log('userMatch :>> ' );
// 				return done(null, false, { message: 'Incorrect email' })
// 			}
// 			if (!userMatch.checkPassword(password)) {
//                 console.log('password :>> ' );
// 				return done(null, false, { message: 'Incorrect password' })
// 			}
//             console.log('done :>> ' );
// 			return done(null, userMatch)
// 		})
// 	}
// )