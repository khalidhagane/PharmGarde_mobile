require('dotenv').config()
const {dbConnect} = require('./config/config')
const express = require('express')
const colors = require('colors')
const session = require('express-session');
const csrf = require('csurf');
const passport = require('./passport')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');
const localStrategy = require("passport-local");
const bodyParser = require("body-parser");
// const auth = require('./middlwares/authMiddleware')
var User = require("./models/User");
const MongoStore = require('connect-mongo')
const app = express()


dbConnect() 
app.locals.pluralize = require('pluralize');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
    mongoUrl: process.env.DB_URL ,
    collectionName: 'sessions' ,
    ttl: 60 * 60 * 24 * 7 // 1 week
     }), 
    cookie: { maxAge: 60000 }
    }));

// app.use(csrf(
//     { cookie: true }
// ));
// app.use(passport.authenticate('session'));
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser
// app.use(function(req, res, next) {
//     var msgs = req.session.messages || [];
//     res.locals.messages = msgs;
//     res.locals.hasMessages = !! msgs.length;
//     req.session.messages = [];
//     next();
//   });

//   app.use(function(req, res, next) {
//     res.locals.csrfToken = req.csrfToken();
//     next(); 
//   });


// passport config
// app.use(auth.initialize());
// passport.use(new localStrategy(User.authenticate()));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


const pharmacyRouter = require('./routes/pharmacy')

const authRouter = require('./routes/auth')

app.use('/api/pharmacy', pharmacyRouter)
app.use('/api/auth', authRouter)

// api/auth
// api/pharmacy

 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// routes

// app.use('/api/pharmacy', pharmacyRouter)
// app.use('/api/auth', authRouter)

app.listen(process.env.PORT, () => console.log('Server running on port 5000'.bgGreen.bold) )

