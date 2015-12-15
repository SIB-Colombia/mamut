'use strict';

exports.index = function(req, res) {
	var request = require("request");

	request("http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json", function(error, response, body) {
		if (!error && res.statusCode == 200) {
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
	var ob;

	request("http://apimamut.elasticbeanstalk.com/get-record/"+id, function(error, response, body) {
		if (!error && res.statusCode == 200) {
			body = body.replace(/\{\{(.+?)\}\}/g, '');
			console.log(body);
			var data = JSON.parse(body);
			request("http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json", function(error, response, body) {
				if (!error && res.statusCode == 200) {
					var lenguajes = JSON.parse(body);
					res.render('index', { title: 'Editor Catálogo de la Biodiversidad' , json: data, lenguajes: lenguajes });
				}
			});
		}
	});
};
