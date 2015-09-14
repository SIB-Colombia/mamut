'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var $ = require('gulp-load-plugins')();

gulp.task('jadetohtml', function () {

	return gulp.src(path.join(conf.paths.src, '/app/views/main/form/**/*.jade'))
		.pipe($.jade({
			pretty: true
		}))
		.pipe(gulp.dest(path.join(conf.paths.src, '/public/form')))
		.pipe($.debug());
});
