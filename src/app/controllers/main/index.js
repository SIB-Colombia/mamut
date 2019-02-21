'use strict';

exports.index = function(req, res) {
	/*if (req.isAuthenticated()) {
		var request = require('request');
		request(
			'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
			function(error, response, body) {
				if (!error && res.statusCode === 200) {
					var lenguajes = JSON.parse(body);
					return res.render('index', {
						title: 'Editor Catálogo de la Biodiversidad',
						lenguajes: lenguajes
					});
				}
			}
		);
	} else {
		return res.redirect('/');
	}*/
	var request = require('request');
	request(
		'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
		function(error, response, body) {
			if (!error && res.statusCode === 200) {
				var lenguajes = JSON.parse(body);
				return res.render('index', {
					title: 'Editor Catálogo de la Biodiversidad',
					lenguajes: lenguajes
				});
			}
		}
	);
};

exports.home = function(req, res) {
	/*if (req.isAuthenticated()){
		return res.render('home', { title: 'Editor Catálogo de la Biodiversidad' });
	}else{
		return res.redirect('/');
	}*/
	return res.render('home', { title: 'Editor Catálogo de la Biodiversidad' });
};

exports.access = function(req, res) {
	res.render('access', { title: 'Editor Catálogo de la Biodiversidad' });
};

exports.edit = function(req, res) {
	/*if (req.isAuthenticated()) {
		var request = require('request');
		var id = req.query.id;

		request(
			'http://167.114.113.179:3000/fichas/' + id,
			function(error, response, body) {
				if (!error && res.statusCode === 200) {
					body = body.replace(/\{\{(.+?)\}\}/g, '');
					var data = JSON.parse(body);
					request(
						'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
						function(error, response, body) {
							if (!error && res.statusCode === 200) {
								var lenguajes = JSON.parse(body);
								return res.render('index', {
									title: 'Editor Catálogo de la Biodiversidad',
									json: data,
									lenguajes: lenguajes
								});
							}
						}
					);
				}
			}
		);
	} else {
		return res.redirect('/');
	}*/
	var request = require('request');
	var id = req.query.id;

	request(
		'http://167.114.113.179:3000/fichas/' + id,
		function(error, response, body) {
			if (!error && res.statusCode === 200) {
				body = body.replace(/\{\{(.+?)\}\}/g, '');
				var data = JSON.parse(body);
				request(
					'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
					function(error, response, body) {
						if (!error && res.statusCode === 200) {
							var lenguajes = JSON.parse(body);
							return res.render('index', {
								title: 'Editor Catálogo de la Biodiversidad',
								json: data,
								lenguajes: lenguajes
							});
						}
					}
				);
			}
		}
	);
};

exports.login = function(req, res, next) {
	/*var passport = require('passport');
	passport.authenticate('cas', function (err, user, info) {
		if (err) {
			return next(err);
		}

		if (!user) {
			req.session.messages = info.message;
			return res.redirect('/');
		}

		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.redirect('/home');
		});
	})(req, res, next);*/
	return res.redirect('/home');
};

exports.logout = function(req, res) {
	console.log('logging out');
	req.logout();
	res.redirect('/');
};
