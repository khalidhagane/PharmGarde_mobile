const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const strategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        proxy: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        console.log('profile :>> ', profile);
        if (profile) {
            User.findOne({ 'email': profile.email }, async (err, user) => {
                if (err) {
                    console.log('err :>> ' , err );
                    return done(err)
                }
                if (!user) {
                    console.log('userMatch :>> ' );
                    // create user
                    const newUser =  new User({
                        email: profile.email,
                        name: profile.displayName,
                        password: profile.id, // for creating a password this is not secure this for testing only is for production
                    })
                    await newUser.save((err, user) => {
                        if (err) {
                            console.log('err :>> ' , err );
                            return done(err)
                        }
                        console.log('user :>> ' , user );
                        return done(null, user)
                    })
                }
                console.log('done :>> ' , user );
                return done(null, user)
            })
        }
            
        } 
    )

module.exports = strategy
