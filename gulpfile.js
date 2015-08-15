var gulp = require('gulp');
var swig = require('gulp-swig');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {
  // SWIG
  gulp.src('./src/*.swig')
    .pipe(swig())
    .pipe(gulp.dest('./dist/'))
  // LESS
  gulp.src('./src/assets/less/*.less')
    .pipe(less({
      paths: [ 
        path.join(__dirname, 'src', 'assets', 'less', 'includes'),
      ]
    }))
    .pipe(gulp.dest('./dist/styles/'));
});