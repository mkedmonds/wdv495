var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var bundler = browserify({
    entries: ['./build/index.js'],
    debug: true
  });

  return bundler
    .bundle()
    .pipe(source('serviceworker-cache-polyfill.js'))
    .pipe(gulp.dest('./dist/'));
});