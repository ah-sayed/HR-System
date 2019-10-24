var express = require('express');
var router = express.Router();
const participants = require('../models/Participants')
/* GET the data stored in the applicants database. */

//that name should be changed for security purposes
router.get('/', function (req, res, next) {


    console.log("a request was made to the database");
    res.writeHead(200, {'Content-Type': 'application/json'});
    //get the participants data from the database
    participants.findAll()
    .then(applicants => {
      const data = JSON.stringify(applicants, null, 1);
      console.log(data);
      return res.end(data);
    })
    
  });

  module.exports = router;