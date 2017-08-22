var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('faissal', { name: 'Faïssal' });
});

module.exports = router;
