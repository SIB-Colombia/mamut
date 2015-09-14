'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('html', ['inject'], function () {
	var jsFilter = $.filter('**/*.js', {restore: true});
	var cssFilter = $.filter('**/*.css', {restore: true});
	var assets;
	return gulp.src(path.join(conf.paths.src, '/app/layouts/final/*.jade'))
		.pipe(assets = $.useref.assets())
		.pipe($.rev())
		.pipe(jsFilter)
		.pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
		.pipe(jsFilter.restore)
		.pipe(cssFilter)
		.pipe($.replace('../../bower_components/bootstrap-stylus/fonts/', '../../fonts/'))
		.pipe($.csso())
		.pipe(cssFilter.restore)
		.pipe($.useref())
		.pipe($.revReplace())
		.pipe(gulp.dest(path.join(conf.paths.src, '/public')))
		.pipe($.size({ title: path.join(conf.paths.tmp, '/'), showFiles: true }));
});

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles().concat('src/public/bower_components/bootstrap-stylus/fonts/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.src, '/public/fonts/')));
});

gulp.task('clean', function (done) {
	$.del([path.join(conf.paths.tmp, '/')], done);
	$.del([path.join(conf.paths.src, '/public/fonts')], done);
	$.del([path.join(conf.paths.src, '/public/javascripts/final')], done);
	$.del([path.join(conf.paths.src, '/public/stylesheets/final')], done);
	$.del([path.join(conf.paths.src, '/app/layouts/final')], done);
});

gulp.task('build', ['clean', 'html', 'fonts']);
