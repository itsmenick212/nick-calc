var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nicks Real Time Calculator', cache: res.cache });
});

module.exports = router;
