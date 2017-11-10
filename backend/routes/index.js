var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/merchant', function(req, res, next) {
  res.render('merchant');
});


router.get('/finance', function(req, res, next) {
  res.render('finance');
});


router.get('/hr', function(req, res, next) {
  res.render('hr');
});


router.get('/retail', function(req, res, next) {
  res.render('retail');
});

module.exports = router;
