/*
npm i -g gulp
npm i --save-dev gulp
npm i --save-dev gulp-sass
npm i --save-dev gulp-js-import
npm i --save-dev gulp-rename
npm i --save-dev gulp-clean-css
npm i --save-dev gulp-autoprefixer
npm i --save-dev gulp-sass-lint
npm i --save-dev gulp-sourcemaps
npm i --save-dev gulp-concat
npm i --save-dev gulp-minify
npm i --save-dev gulp-uglify
*/

const {series, watch, parallel } = require('gulp');
const gulp        = require('gulp'),
  sass        = require('gulp-sass'),
  jsImport = require('gulp-js-import'),
    rename      = require('gulp-rename'),
    cleanCSS    = require('gulp-clean-css'),
    prefix      = require('gulp-autoprefixer'),
    sassLint    = require('gulp-sass-lint'),
    sourcemaps  = require('gulp-sourcemaps'),
    minify  = require('gulp-minify'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');



var sassOptions = {
  outputStyle: 'expanded'
};

var prefixerOptions = {
  overrideBrowserslist: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'safari 9', 'safari 10', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
};



// Manual
var admin_path_sass = './src/admin/style.scss';
var xenia_path_sass = './src/sass/main.scss';
var xenia_path_js = './src/js/main.js';

// 
// Sass for dev
gulp.task('csass', () => {
  return gulp.src(xenia_path_sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css'))
});

// Sass for dev
gulp.task('cadminsass', () => {
  return gulp.src(admin_path_sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('admin-style.css'))
    .pipe(gulp.dest('assets/admin'))
});


// Js for dev
gulp.task('cjs', function () {
  return gulp.src(xenia_path_js)
    
  .pipe(rename('main.js'))
  .pipe(jsImport({
    hideConsole: true,
    importStack: true
  }))
  // .pipe(uglify())
  .pipe(gulp.dest('assets/js'))
    
});

// ===============
// Auto Build
// ===============
gulp.task('watch',()=>{
  watch('src/sass/**/*.scss', {delay: 500}, gulp.registry().get('csass'));
  watch('src/admin/**/*.scss', {delay: 500}, gulp.registry().get('cadminsass'));
  watch('src/js/**/*.js', {delay: 500},gulp.registry().get('cjs'));
})


// ===============
// Build all once
// ===============
// gulp.task('cbuild_dev', gulp.series("csass", "cadminsass", "cjs"));
gulp.task('cb_dev', gulp.parallel("csass", "cadminsass", "cjs"));
gulp.task('cb_prod', done => {
  console.info('Start: xenia_path_sass');
  // Sass for Production
  gulp.src(xenia_path_sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(cleanCSS())
    // .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('assets/css'))

  console.info('Start: admin_path_sass');
  // Sass for Production
  gulp.src(admin_path_sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(cleanCSS())
    // .pipe(sourcemaps.write())
    .pipe(rename('admin-style.css'))
    .pipe(gulp.dest('assets/admin'))


  console.info('Start: xenia_path_js');
  // Js for Production
  gulp.src(xenia_path_js)
    .pipe(rename('main.js'))
    .pipe(jsImport({
        hideConsole: true,
        importStack: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'))

    done();
});