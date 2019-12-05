const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/index').user;
const jwt = require('jsonwebtoken');

const TOKEN_SECRET =
    '25cf4d1b217338a9bb3b38fd4b6162cf522b364e9568e254fb90d9dabb3c648a';

// serialize sessions
passport.serializeUser((user, done) => {
    done(null, user);
});

// deserlialize sessions
passport.deserializeUser((user, done) => {
    User.find({ where: { uuid: user.uuid } })
        .then(user => {
            if (user) return done(null, user);
            return done(null, false);
        })
        .catch(err => {
            return done(err, null);
        });
});

// authentication middleware
const local = passport.use(
    new LocalStrategy(
        { usernameField: 'email', passwordField: 'password' },
        (email, password, next) => {
            User.findOne({ where: { email: email } }).then(user => {
                const pass = user ? user.hash : '';
                user.validPassword(password, pass, next, user);
            });
        }
    )
);

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = TOKEN_SECRET;

// get JWT token
const getToken = user => {
    return jwt.sign({ user }, jwtOptions.secretOrKey, {
        expiresIn: '50m',
    });
};

const jwtPassport = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    User.findOne({ where: { uuid: jwt_payload.uuid } }).then(user => {
        if (user) next(null, user);
        next(null, false);
    });
});

exports.local = local;
exports.getToken = getToken;
exports.jwtPassport = passport.use(jwtPassport);
exports.verifyUser = passport.authenticate('jwt', { session: false });
