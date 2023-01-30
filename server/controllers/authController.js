const User = require('../models/User');
const bcrypt = require('bcryptjs');
// const {jwtSign} = require('../config/config');
const {validationResult} = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');


// @route   POST api/auth/register
// @desc    Register user
// @access  Public
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {name, email, password} = req.body;
    try {
        // use bcrypt to hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create a new user
        console.log(' :>>dddd ' );
        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        // save the user
        await user.save();
 
        res.status(200).json({msg: 'User registered successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
}

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
exports.login = async (req, res) => {
    
    console.log('========= login ======== ' );
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (err) {
            console.log("Error Happened In auth /token Route");
          } else {
            const payload = {
                id: user.id,
                expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
            };
            const token = jwt.sign(
                JSON.stringify(payload),
                jwtConfig.secret
            );
            res.cookie('jwt', token, { httpOnly: true });
            // res.cookie('csrfToken', token, { httpOnly: true }')
            res.status(200).send({
                success: true,
                token: token,
            });
        }
    })

}

// @route   GET api/auth/google/success
// @desc    Google auth success
// @access  Public
exports.googleAuthSuccess = async (req, res) => {
    console.log('googleAuthSuccess :>> ' );
    const payload = {
        id: req.user.id,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
    };
    const token = jwt.sign(
        JSON.stringify(payload),
        jwtConfig.secret
    );
    res.cookie('jwt', token, { httpOnly: true });
    // redirect to frontend
    res.redirect('http://localhost:3000/home')
    res.status(200).send({
        success: true,
        token: token,
    });
}




