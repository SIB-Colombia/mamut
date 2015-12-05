'use strict';

// Karma configuration
// Generated on Tue Sep 01 2015 14:57:21 GMT-0500 (COT) by Valentina

var path = require('path');
var conf = require('./gulp/config');

var _ = require('lodash');
var wiredep = require('wiredep');

function listFiles() {
	var wiredepOptions = _.extend({}, conf.wiredep, {
		dependencies: true,
		devDependencies: true
	});

	return wiredep(wiredepOptions).js
		.concat([
			path.join(conf.paths.src, '/app/**/*.module.js'),
			path.join(conf.paths.src, '/app/**/*.js'),
			path.join(conf.paths.src, '/test/**/*.spec.js'),
			path.join(conf.paths.src, '/test//**/*.mock.js'),
			path.join(conf.paths.src, '/test//**/*.html')
		]);
}

module.exports = function(config) {
	var configuration = {

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha'],


		// list of files / patterns to load in the browser
		files: listFiles(),


		// list of files to exclude
		exclude: [
			'**/*.swp'
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	};

	// This block is needed to execute Chrome on Travis
	// If you ever plan to use Chrome and Travis, you can keep it
	// If not, you can safely remove it
	// https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
	if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
		configuration.customLaunchers = {
			'chrome-travis-ci': {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		};
		configuration.browsers = ['chrome-travis-ci'];
	}

	config.set(configuration);
}
