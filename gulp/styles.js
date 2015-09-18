'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles', function () {
	var injectFiles = gulp.src([
		path.join(conf.paths.src, '/app/resources/stylesheets/**/*.styl'),
		path.join('!' + conf.paths.src, '/app/resources/stylesheets/style.styl')
	], { read: false });

	var injectOptions = {
		transform: function(filePath) {
			filePath = filePath.replace(conf.paths.src + '/app/resources/stylesheets/', '');
			return '@import "' +filePath + '";';
		},
		starttag: '// injector',
		endtag: '// endinjector',
		addRootSlash: false
	};

	return gulp.src([
		path.join(conf.paths.src, '/app/resources/stylesheets/style.styl')
	]).pipe($.inject(injectFiles, injectOptions))
		.pipe(wiredep(_.extend({}, conf.wiredep)))
		.pipe($.sourcemaps.init())
		.pipe($.stylus()).on('error', conf.errorHandler('Stylus'))
		.pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.join(conf.paths.src, '/public/stylesheets/')))
		.pipe(browserSync.reload({ stream: true }));
});
