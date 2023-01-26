var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const User = require('../models/User') ;

    // var opts = {}

    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    // opts.secretOrKey = process.env.JWT_SECRET;
    // opts.issuer = 'accounts.examplesoft.com';
    // opts.audience = 'yoursite.net';
    const cookieExtractor = req => {
        let jwt = null 
    
        if (req && req.cookies) {
            jwt = req.cookies['jwt']
        }
    
        return jwt
    }

    const opts = {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.JWT_SECRET
    }


    const strategy = new JwtStrategy(opts, function(jwt_payload, done) {
        console.log('jwt_payload :>> ', jwt_payload);
        User.findOne({_id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                console.log('user :>> ', user);
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    });  


    module.exports = strategy

    
    

        // passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        //     User.findOne({id: jwt_payload.sub}, function(err, user) {
        //         if (err) {
        //             return done(err, false);
        //         }
        //         if (user) {
        //             return done(null, user);
        //         } else {
        //             return done(null, false);
        //             // or you could create a new account
        //         }
        //     });
        // }));
    
    