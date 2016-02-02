var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('daemon', function () {
	gulp.watch('css/**/*.css', ['css']);
	gulp.watch('js/**/*.js', ['js']);
});


gulp.task('js', function () {
	gulp.src('bower_components/requirejs/require.js')
		.pipe(shell([
			'r.js -o baseUrl=. paths.r5m=bower_components/r5m-cms/js paths.vendor=bower_components name=bower_components/r5m-cms/js/index out=dist/lp.js'
		]))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('css', function () {
	gulp.src('').pipe(shell([
		'r.js -o cssIn=bower_components/r5m-cms/css/all.css out=dist/lp.css'
	]));
});


gulp.task('default', ['js', 'css', 'daemon']);
