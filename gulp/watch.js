'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./config');

function isOnlyChange(event) {
	return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {
	gulp.watch([path.join(conf.paths.src, '/app/layouts/layout.jade'), 'bower.json'], ['inject']);

	gulp.watch([
		path.join(conf.paths.src, '/app/**/*.css'),
		path.join(conf.paths.src, '/app/**/*.styl')
	], function(event) {
		if(isOnlyChange(event)) {
			gulp.start('styles');
		} else {
			gulp.start('inject');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
		if(isOnlyChange(event)) {
			gulp.start('scripts');
		} else {
			gulp.start('inject');
		}
	});

	//gulp.watch(path.join(conf.paths.src, '/app/**/*.jade'), function(event) {
	//	browserSync.reload(event.path);
	//});
});
