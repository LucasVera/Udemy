var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass');

// use .pipe to add various scripts 
gulp.task('default',['clean', 'dev:styles', 'dev:scripts']);

gulp.task('dev:styles', devStyles);
function devStyles(){
    return gulp 
        .src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/styles'));
}

gulp.task('dev:scripts', devScripts);
function devScripts(){
    return gulp
        .src('./src/scripts/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./public/scripts'));
}

gulp.task('clean', clean);
function clean(){
    setTimeout(()=>{
        console.log('Cleaned!');
    }, 1500);
}