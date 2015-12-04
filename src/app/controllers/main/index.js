'use strict';

exports.index = function(req, res) {
	res.render('index', { title: 'Editor Catálogo de la Biodiversidad' });
};

exports.home = function(req, res) {
	res.render('home', { title: 'Editor Catálogo de la Biodiversidad' });
};

exports.edit = function(req, res) {
	
	var request = require("request");
	var id = req.query.id;
	var ob;

	request("http://192.168.205.12:3000/get-record/"+id, function(error, response, body) {
		ob = body;
	});

	res.render('index', { title: 'Editor Catálogo de la Biodiversidad' , json: ob });

};
