
var gulp = require('gulp');

gulp.task('hello', function() {
    console.log("Hello world!");
});

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.sass')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
      
  });
  