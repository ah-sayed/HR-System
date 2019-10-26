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
      //console.log("data ya 3amaaaa",data);
     //  res.send(JSON.parse(data));
      return res.render('index', { data:JSON.parse(data)});//json Parse is needed! Don't delete it!!
    })
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  
  //hard coded the value of the id tell i have some idea of how to get the id 

  // the query does a really strange thing if any date was for example 25/11/2019 it store it as day 24
  // stores always the day before the inserted day lol 
  participants.update({ 
    callDate: req.body.callDate,
    callTime: req.body.callTime,
    interviewer: req.body.adminName,
    interviewDate: req.body.interviewDate,
    interviewTime: req.body.interviewTime
  }, {
    where: {id: 9},
    returning: true, // needed for affectedRows to be populated
    plain: true      // makes sure that the returned instances are just plain objects
  })

  res.redirect('/')
});

module.exports = router;
