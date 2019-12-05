const express = require('express');
const router = express.Router();
const Participant = require('../models/index').participant;

/* GET users listing. */
router.get('/', function(req, res, next) {
    const id = req.params.id;
    Participant.findAll({}).then(applicants => {
        const data = JSON.stringify(applicants, null, 1);
        // console.log(applicants)
        return res.render('interviews', { data: JSON.parse(data) });
    });
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    Participant
        .findAll({
            where: {
                id: id,
            },
        })
        .then(applicants => {
            const data = JSON.stringify(applicants, null, 1);
            return res.render('interviews', { data: JSON.parse(data) });
        });
});

module.exports = router;
