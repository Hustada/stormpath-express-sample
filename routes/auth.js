var express = require('express');
var router = express.Router();
var passport = require('passport');
var stormpath = require('stormpath');


// Render the registration page:

router.get('/register', function(req, res) {
  res.render('register', {title: 'Register', error: req.flash('error')[0]
});
});