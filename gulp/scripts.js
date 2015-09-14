'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

// Check all the app scrips code quality and errors with jshint
gulp.task('scripts', function () {
	return gulp.src(path.join(conf.paths.src, '/app/resources/javascripts/*.js'))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe(gulp.dest(path.join(conf.paths.src, '/public/javascripts/')))
		.pipe(browserSync.reload({ stream: true }))
		.pipe($.size());
});
