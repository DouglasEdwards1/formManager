var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('homeConsole', { title: 'homeConsole' });
  //res.send('respond with a resource');
});

module.exports = router;
