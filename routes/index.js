var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Home', user: req.user});
});

// Render the Dashboard page:
router.get('/dashboard', function (req, res) {
  if (!req.user || req.user.status !== 'ENABLED') {
    return res.direct('/login');
  }

  res.render('dashboard', {title: 'Dashboard', user: req.user});
});

module.exports = router;
