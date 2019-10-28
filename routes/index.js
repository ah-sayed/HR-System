var express = require('express');
var router = express.Router();
//const db = require('../config/database')
const participants = require('../models/Participants')
/* GET home page. */
router.get('/', function (req, res, next) {
  //get the participants data from the database
  
  participants.findAll()
    .then(applicants => {
      const data = JSON.stringify(applicants, null, 1);
     //  res.send(JSON.parse(data));
      return res.render('index', { data:JSON.parse(data)});//json Parse is needed! Don't delete it!!
    })
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  
  // the query does a really strange thing if any date was for example 25/11/2019 it store it as day 24
  // stores always the day before the inserted day lol 
  // googled it bs m3rfsh brdo xD
  participants.update({ 
    callDate: req.body.callDate,
    callTime: req.body.callTime,
    interviewer: req.body.hrName,//#changed the Interviewer type to String to store names not Ints#//
    interviewDate: req.body.interviewDate,
    interviewTime: req.body.interviewTime,
    note: req.body.note,
    called: 1
  }, {
    where: {id: req.body.pId},
    returning: true, // needed for affectedRows to be populated
    plain: true      // makes sure that the returned instances are just plain objects
  })
  .then(success=>{
    console.log('data updated successfuly');
    res.redirect('/');
  })
  .catch(err=>{
    console.log(err);
    res.redirect('/');
  });

  
});

module.exports = router;
