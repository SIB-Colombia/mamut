'use strict';

var express = require('express'),
		path = require('path'),
		winston = require('winston');

module.exports = function(parent) {
	var oneMonth = 60*60*24*30;
	parent.use(express.static(path.join(__dirname, './../../src/public'), { maxAge: oneMonth }));

	var logger = new (winston.Logger)({
		transports: [
			new (winston.transports.Console)({ level: 'error' }),
			new (winston.transports.File)({ filename: 'logs/dataportal-explorer.log' })
		]
	});
};
