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
      console.log("data ya 3amaaaa",data);
     //  res.send(JSON.parse(data));
      return res.render('index', { data:JSON.parse(data)});//json Parse is needed! Don't delete it!!
    })
});
module.exports = router;


// //add to the database(just a test shouldn't be here)
  // const objectToBeAdded ={
  //   att1:"val",
  //   att2:"val2"
  // }
  // let{ att1, att2} = objectToBeAdded;
  // participants.create({
  //   att1:att1,
  //   att2   //another method to do something line the previous line

  // })
  // .then(part=> res.redirect('/index'))
  // .catch(err=>console.log(err))