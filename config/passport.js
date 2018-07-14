const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('./keys');

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
        (accessToken, refreshToken, profile, cb) => {
            console.log(profile)
        }
    ));
}