'use strict';
/*
 * Module dependencies.
 */

var express = require('express');
var passport = require('passport');
var CasStrategy = require('passport-cas').Strategy;

passport.use(new CasStrategy({
	version: 'CAS3.0',
	ssoBaseURL: 'http://54.172.124.188:8080/cas',
 	serverBaseURL: 'http://mamut.biodiversidad.co/'
},function(profile, done) {
	var user = profile.attributes;
	return done(null, user);
}));

var app = express();

// Load app configuration
require('./config/environments/all')(app);

passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are getoing to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
