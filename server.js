(function () {
  "use strict";

  var express = require('express');
  var path = require('path');
  var favicon = require('static-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var config = require('./config');
  require('./initDb');

  var server = express();

  // view engine setup
  server.set('views', path.join(__dirname, 'views'));
  server.set('view engine', 'ejs');

  server.use(favicon());
  server.use(logger('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded());
  server.use(cookieParser());
  server.use(express.static(path.join(__dirname, 'public')));

  // routes
  require('./routes')(server);

/// catch 404 and forwarding to error handler
  server.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

/// error handlers

// production error handler
// no stacktraces leaked to user
  server.use(function (err, req, res, next) {
    console.log(err);
    res.send(err.status || 500);
  });

  module.exports = server;

  var listener = server.listen(config.port || 3000, function () {
    console.log('Application started');
  });

  // comment this out if you don't need socket support
  require('./routes/sockets')(listener);
}());

