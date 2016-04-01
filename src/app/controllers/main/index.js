'use strict';

exports.index = function(req, res) {
	var request = require("request");

	request("http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json", function(error, response, body) {
		if (!error && res.statusCode === 200) {
			var lenguajes = JSON.parse(body);
			res.render('index', { title: 'Editor Catálogo de la Biodiversidad' , lenguajes: lenguajes });
		}
	});
};

exports.home = function(req, res) {
	res.render('home', { title: 'Editor Catálogo de la Biodiversidad' });
};

exports.edit = function(req, res) {
	
	var request = require("request");
	var id = req.query.id;

	request("http://192.168.205.191:8080/fichas/"+id, function(error, response, body) {
		if (!error && res.statusCode === 200) {
			body = body.replace(/\{\{(.+?)\}\}/g, '');
			var data = JSON.parse(body);
			request("http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json", function(error, response, body) {
				if (!error && res.statusCode === 200) {
					var lenguajes = JSON.parse(body);
					res.render('index', { title: 'Editor Catálogo de la Biodiversidad' , json: data, lenguajes: lenguajes });
				}
			});
		}
	});
};

exports.login = function(req, res, next) {
	var passport = require('passport');
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

		req.session.messages = '';
			return res.redirect('/');
		});
	})(req, res, next);
};