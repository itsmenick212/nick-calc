var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nick's Real Time Calculator', cache: res.cache });
});

module.exports = router;
