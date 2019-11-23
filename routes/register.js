var express = require('express');
var router = express.Router();

//that name should be changed for security purposes
router.get('/', function (req, res, next) {
    return res.render('register');
  });

  module.exports = router;