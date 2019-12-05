const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('../utils/authenticate');

const User = require('../models/index').user;
const { registerValidation, loginValidation } = require('../utils/validation');

//that name should be changed for security purposes
router
    .route('/register')
    .get(async (req, res, next) => {
        return res.render('register');
    })
    .post((req, res, next) => {
        const { error } = registerValidation(req.body);
        if (error) {
            return res
                .status(400) // should render 'register' page with error object
                .json({ success: false, error: error.details[0].message });
        }
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (!user) {
                    const user = {
                        name: req.body.name,
                        hash: req.body.password,
                        email: req.body.email,
                        phone: req.body.phone,
                        university: req.body.university,
                        faculty: req.body.faculty,
                        year: req.body.year,
                    };
                    User.create(user)
                        .then(user => {
                            if (user) {
                                // important for authentication purposes 
                                passport.authenticate('local')(req, res, () => {
                                    return res.status(201).json({
                                        success: true,
                                        msg: 'Registration Successful!',
                                        user,
                                    });
                                });
                            }
                        })
                        .catch(err => {
                            return res.status(500).render('error', err);
                        });
                } else {
                    return res.status(403).json({
                        success: false,
                        msg: 'This email is already exist.',
                    });
                }
            })
            .catch(err => {
                return res.status(500).render('error', err);
            });
    });

router
    .route('/login')
    .get((req, res, next) => {
        return res.render('login');
    })
    .post(loginValidation, passport.authenticate('local'), (req, res, next) => {
        // create JWT token
        const token = auth.getToken({ uid: req.user.uuid });
        return res.status(200).json({
            success: true,
            token,
        });
    });

module.exports = router;
