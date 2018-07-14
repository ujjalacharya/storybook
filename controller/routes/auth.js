const Router = require('express').Router();
const passport = require('passport');

Router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
);

module.exports = Router;