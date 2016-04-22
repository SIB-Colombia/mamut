'use strict';

var express = require('express'),
    fs = require('fs');

module.exports = function(parent, options) {
	var verbose = options.verbose;
	fs.readdirSync(__dirname + '/../controllers').forEach(function(name) {
		verbose && logger.info('\n %s:', name);
		var obj = require('./../controllers/' + name),
			name = obj.name || name,
			prefix = obj.prefix || '',
			app = express(),
			method,
			path;

		// allow specifying the view engine
		if (obj.engine) app.set('view engine', obj.engine);
		app.set('views', __dirname + '/../views/' + name);

		// error handlers

		// development error handler
		// will print stacktrace
		if (app.get('env') === 'development') {
			app.use(function(err, req, res, next) {
				res.status(err.status || 500);
				console.log(__dirname + '/../views/');
				res.render('error', {
					message: err.message,
					error: err
				});
			});
		}

		// production error handler
		// no stacktraces leaked to user
		app.use(function(err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: {}
			});
		});

		app.use('/', function(req, res, next) {
			if (req.isAuthenticated()) {
				res.locals.firstname = req.user.firstname;
				res.locals.lastname = req.user.lastname;
				res.locals.roles = req.user.roles;
			}
			return next();
		});

		// before middleware support
		if (obj.before) {
			path = '/' + name + '/:' + name + '_id';
			app.all(path, obj.before);
			verbose && console.log(' ALL %s -> before', path);
			path = '/' + name + '/:' + name + '_id/*';
			app.all(path, obj.before);
			verbose && console.log(' ALL %s -> before', path);
		}

		// generate routes based
		// on the exported methods
		for (var key in obj) {
			// "reserved" exports
			if (~['name', 'prefix', 'engine', 'before'].indexOf(key)) continue;
			// route exports
			switch (key) {
				case 'index':
					method = 'get';
					path = '/new';
					break;
				case 'home':
					method = 'get';
					path = '/home';
					break;
				case 'access':
					method = 'get';
					path = '/';
					break;
				case 'edit':
					method = 'get';
					path = '/edit';
					break;
				case 'login':
					method = 'get';
					path = '/login';
					break;
				case 'logout':
					method = 'get';
					path = '/logout';
					break;
				default:
					throw new Error('unrecognized route: ' + name + '.' + key);
			}
			path = prefix + path;
			app[method](path, obj[key]);
			verbose && console.log(' %s %s -> %s', method.toUpperCase(), path, key);
		}
		// mount the app
		parent.use(app);
	});
};
