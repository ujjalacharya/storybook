const Router = require('express').Router();
const passport = require('passport');

Router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
);

Router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });
    
module.exports = Router;