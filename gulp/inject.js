'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('inject', ['scripts', 'styles'], function () {
	var injectStyles = gulp.src([
		path.join(conf.paths.src, '/public/stylesheets/**/*.css'),
	], { read: false });

	var injectScripts = gulp.src([
		path.join(conf.paths.src, '/public/javascripts/**/*.module.js'),
		path.join(conf.paths.src, '/public/javascripts/**/*.js'),
		path.join('!' + conf.paths.src, '/public/javascripts/final/**/*.js'),
		path.join('!' + conf.paths.src, '/public/**/*.spec.js'),
		path.join('!' + conf.paths.src, '/public/**/*.mock.js')
	]);

	var injectOptions = {
		ignorePath: [conf.paths.tmp, path.join(conf.paths.src, '/public')],
		addRootSlash: true
	};

	return gulp.src(path.join(conf.paths.src, '/app/layouts/layout.jade'))
		.pipe($.inject(injectStyles, injectOptions))
		.pipe($.inject(injectScripts, injectOptions))
		.pipe(wiredep(_.extend({ignorePath: ['../../public']}, conf.wiredep)))
		.pipe(gulp.dest(path.join(conf.paths.src, '/app/layouts/final')))
		.pipe($.debug());
});
