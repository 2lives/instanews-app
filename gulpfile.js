var gulp = require('gulp'), //load gulp first
    uglify = require('gulp-uglify'), 
    rename = require('gulp-rename');
    browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint');

    // link task for the js
gulp.task('lint', function(){
  return gulp.src(['index.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});


    //script task to minify, rename and put in build folder
gulp.task('scripts', gulp.series('lint', function(){
  return gulp.src('index.js')
      .pipe(uglify()) //call uglify function on files
      .pipe(rename({extname: '.min.js'}))  //rename the now ugly file
      .pipe(gulp.dest('./build/js')) 
}));

gulp.task('watch', function(){
  gulp.watch('index.js', gulp.parallel('scripts'));
});
//browser sync
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

});

    gulp.watch('./build/js/*js').on('change', browserSync.reload);



 //default function that can reference multiple named tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync'));
