const gulp = require('gulp'), 
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
  gulp.src('./cloudkitchen/static/scss/*scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    versions: ['last 5 browsers']
  }))
  .pipe(gulp.dest('./cloudkitchen/static/css'))
  );

gulp.task('default', () => {
  gulp.watch('./cloudkitchen/static/scss/*.scss', ['sass'])
})