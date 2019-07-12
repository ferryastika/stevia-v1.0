var express = require('express');
var router = express.Router();

var testRoute = require('./tests'); 
var apiRoute = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/test', testRoute);

router.use('/api', apiRoute);

module.exports = router;
