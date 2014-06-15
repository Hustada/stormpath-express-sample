var express = require('express');
var router = express.Router();
var passport = require('passport');
var stormpath = require('stormpath');


// Render the registration page:

router.get('/register', function(req, res) {
  res.render('register', {title: 'Register', error: req.flash('error')[0]
});
});

// Register a new user to Stormpath
router.post('/resister, function'(req, res){

  var username = req.body.username;
  var password = req.body.password;

  // Grab user fields:

  if (!username || !password) {
    return res.render('register', {title: 'Register', error: 'Email and password required.'});
  }
});