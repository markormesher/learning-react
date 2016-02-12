var gulp = require('gulp'),
	gUtil = require('gulp-util'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	reactify = require('reactify');

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gUtil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gUtil.log.bind(gUtil, 'Browserify error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	}

	build();
	bundler.on('update', build);
});
