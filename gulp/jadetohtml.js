'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var $ = require('gulp-load-plugins')();

gulp.task('jadetohtml', function () {

	return gulp.src([path.join(conf.paths.src, '/app/views/main/**/*.jade'), path.join('!' + conf.paths.src, '/app/views/main/index.jade')])
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest(path.join(conf.paths.src, '/public')))
		.pipe($.debug());
});
