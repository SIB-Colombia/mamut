'use strict';
/*
 * Module dependencies.
 */

var express = require('express');

var app = express();

// Load app configuration
require('./config/environments/all')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
