var express = require('express');
//var async = require('async');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var router = express.Router();
var mysql_query = require('../config/database');

//var mysql_query = require('path/to/your/mysql_query');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FormManager' });
});

router.post('/logIn', function(req, res, next) {

  // Validate that the name field is not empty.
//body('name', 'name required').isLength({ min: 1 }).trim(),

// Sanitize (trim and escape) the name field.
//sanitizeBody('name').trim().escape(),

//console.log(req.query.name_field);

  mysql_query('SELECT * from users where username = ?', {username: 'test'}, function(err, rows)   {
      console.log(rows);
      //mysql_query.end();
      //res.json(rows);

     //var user = rows[0].username;

     //res.send('dbTest: ' + user);
     //var password= rows[0].password;
      //res.render('index', { title: 'FormManager',test:   user});
  });
});

module.exports = router;
