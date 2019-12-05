var express = require('express');
var router = express.Router();
//const db = require('../config/database')
const Participant = require('../models/index').participant;
/* GET home page. */
router.get('/', function(req, res, next) {
    //get the Participant data from the database

    Participant.findAll().then(applicants => {
        const data = JSON.stringify(applicants, null, 1);
        //  res.send(JSON.parse(data));
        return res.render('index', { data: JSON.parse(data) }); //json Parse is needed! Don't delete it!!
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body);

    // the query does a really strange thing if any date was for example 25/11/2019 it store it as day 24
    // stores always the day before the inserted day lol
    // googled it bs m3rfsh brdo xD
    Participant
        .update(
            {
                callDate: req.body.callDate,
                callTime: req.body.callTime,
                hrCalled: req.body.hrCalled,
                interviewer: req.body.interviewer, //remember to make sure the admin entered this value has position Head or Vice.
                interviewDate: req.body.interviewDate,
                interviewTime: req.body.interviewTime,
                note: req.body.note,
                called: 1,
            },
            {
                where: { id: req.body.pId },
                returning: true, // needed for affectedRows to be populated
                plain: true, // makes sure that the returned instances are just plain objects
            }
        )
        .then(success => {
            console.log('data updated successfuly');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        });
});

module.exports = router;
