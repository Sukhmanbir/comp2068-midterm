var express = require('express');
var router = express.Router();

/* GET home page/landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET people's page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
