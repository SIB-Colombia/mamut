'use strict';

var gulp = require('gulp'),
		nodemon = require('gulp-nodemon');

var browserSync = require('browser-sync');

gulp.task('server', ['watch', 'browser-sync'], function () {

});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
		files: ["src/**/*.*"],
		port: 7000
	});
});

gulp.task('nodemon', function() {
	var started = false;
	return nodemon({
		script: 'app.js',
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('start', function() {
		if(!started) {
			started = true;
		}
	})
	.on('restart', function () {
		console.log('restarted!');
	});
});
