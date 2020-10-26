var createError = require('http-errors');
var express = require('express');
var path = require('path');
var moment = require('moment');

var indexRouter = require('./routes/index');
var app = express();
var http = require('http').createServer(app); 
var io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var computationCache = [];
var calc = require('./calc.js')(io, computationCache);

app.use('/', function(req, res, next) {
  res.cache = computationCache;
  next();
});

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.render('error');
});

http.listen(process.env.port || 8080, () => {
  console.log('listening on *:' + process.env.port || 8080);
});
