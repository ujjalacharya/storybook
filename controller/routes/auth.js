const Router = require('express').Router();
const passport = require('passport');

Router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

Router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });

Router.get('/verify', (req, res)=>{
    if(req.user){
        console.log(req.user)
    }else{
        console.log('Not verified')
    }
})
Router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/dashboard')
})
    
module.exports = Router;