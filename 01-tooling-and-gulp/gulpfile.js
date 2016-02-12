var gulp = require('gulp'),
	gulpConcat = require('gulp-concat'),
	gulpReact = require('gulp-react');

gulp.task('default', function() {
	return gulp
		.src('src/**')
		.pipe(gulpReact())
		.pipe(gulpConcat('application.js'))
		.pipe(gulp.dest('./'));
});