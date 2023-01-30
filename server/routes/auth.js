
const express = require("express")
const router = express.Router()
const User = require('../models/User')
const passport = require('../passport')
const { validationResult,
    check,
    body,
    matchedData,
    sanitizeBody
} = require('express-validator');
var LocalStrategy = require('passport-local');


const { register, login, googleAuthSuccess } = require("../controllers/authController")

router.post("/register", register)

router.post("/login", passport.authenticate('local'), login)
router.post("/logout", (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ msg: 'User logged out successfully' })
})
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { user } = req;
        return res.json({ user });
    });
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }),
    googleAuthSuccess);
router.get('/callback/success',
    (req, res) => {
        res.redirect('http://localhost:3000/login')
    }
);



module.exports = router  