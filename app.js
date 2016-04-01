'use strict';
/*
 * Module dependencies.
 */

var express = require('express');
var passport = require('passport');
var CasStrategy = require('passport-cas').Strategy;

passport.use(new CasStrategy({
	version: 'CAS3.0',
	ssoBaseURL: 'http://login.biodiversidad.co:8080/cas',
 	serverBaseURL: 'http://192.168.205.13:7000'
},function(profile, done) {
	console.log(profile);
	var login = profile.user;
	return done(null, login);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})

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
