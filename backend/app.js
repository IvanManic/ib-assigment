var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');


//custom routers
var shortenRouter = require('./routes/shorten');
var shortUrl = require('./routes/shortUrl');

var cors = require('cors')

var app = express();
app.use(cors())
app.options('*', cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 5000);

app.use(logger('dev'));


//used for generating short url
app.use('/shorten', shortenRouter);
//get short urls
app.use('/', shortUrl);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
