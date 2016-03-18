var gulp = require('gulp');
var sitemap = require('gulp-sitemap');

module.exports = function (url, options) {
	return function () {
		return gulp.src(url+'/**/*.html')
				.pipe(sitemap({
					siteUrl: options.packageJson.r5m.url
				}))
				.pipe(gulp.dest(url));
	};
};
