
const express = require("express")
const router = express.Router()
const User = require('../models/User')
// const passport = require('passport');
const passport = require('../passport')
const { validationResult ,
    check ,
    body ,
    matchedData ,
    sanitizeBody
 } = require('express-validator');
 var LocalStrategy = require('passport-local');


const { register, login } = require("../controllers/authController")

router.post("/register",
    [
        body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'),
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars long'),
    ]
    ,
    register )

router.post("/login", passport.authenticate('local') , login)
// router.get("/profile", auth.authenticate())
router.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user);
    }
);

module.exports = router  