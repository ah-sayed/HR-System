var express = require('express');
var router = express.Router();
const participants = require('../models/participants');
/*here the ajax database updating functions will exist*/ 

router.post('/status', function (req, res, next) {

    console.log(req.body);
    //update
    participants.update({ 
        status: req.body.status
      }, {
        where: {id: req.body.id},
        returning: true, // needed for affectedRows to be populated
        plain: true // makes sure that the returned instances are just plain objects
      })

   return res.json({status:"Success"});
});
module.exports = router;