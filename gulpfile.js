
var gulp = require('gulp');

var sass = require('gulp-sass');

var watch = require('gulp-watch');


gulp.task('hello', function() {
    console.log("Hello world!");
});


gulp.task('sass', function(){
    
    return gulp.src('app/scss/styles.sass')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))     
      
  });

  gulp.task('watch', function(){
    gulp.watch('app/scss/styles.sass', gulp.series(['sass'])); 
    // Other watchers
  });
  

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});