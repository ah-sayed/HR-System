////////////////////////////////////NOT USED BS KHAYFA AMS7O!!!!!!!!!///////////////////////
var express = require('express');
var router = express.Router();
const participants = require('../models/Participants')

//that name should be changed for security purposes
router.get('/', function (req, res, next) {


    console.log("a request was made to the database");
    //get the participants data from the database
    participants.findAll()
    .then(applicants => {
      const data = JSON.stringify(applicants, null, 1);
      return res.end(data);
    })
    
  });

  module.exports = router;