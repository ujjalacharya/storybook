const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser')

//Require routes
const auth = require('./controller/routes/auth')

//passport middleware
require('./config/passport')(passport);

//Database connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .catch(err => console.log(err))
    .then(() => {
        console.log('Connected to the database')
    })

app.use(cookieParser())

//Hnadle express session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Set global variables
app.use((req, res, next)=>{
    res.locals.user = req.user || user;
    next();
})

//Handle routes
app.get('/', (req, res) => {
    res.send("It works")
})

app.use('/auth', auth);

app.listen(PORT, () => {
    console.log(`App started at port ${PORT}`)
})