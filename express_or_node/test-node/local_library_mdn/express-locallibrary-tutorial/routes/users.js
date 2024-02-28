var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('zzzz');
});
router.get('/users/cool/', function(req, res, next) {
  res.send('zzzz');
});

module.exports = router;
