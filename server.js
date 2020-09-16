var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//configs
require('./server/config/connection');
//Models
require('./server/model/user');

//Routes
var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
const http = require('http');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/**
 * _ Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
/**
 _ Create HTTP server.
 _/
 _ Listen on provided port, on all network interfaces.
 */
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = app;
