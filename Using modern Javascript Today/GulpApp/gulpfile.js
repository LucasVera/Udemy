var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();


const config = {
    styles:{
        src:['./src/styles/**/*.scss'],
        autoprefixer:{browsers: ['last 2 versions']},
        dest:'public/styles'
    },
    scripts:{
        src:['./src/scripts/**/*.js'],
        concat:'all.js',
        dest:'public/scripts'
    }
};


// use .pipe to add various scripts 
gulp.task('default',['clean', 'prod:styles', 'prod:scripts']);
gulp.task('prod', ['clean', 'prod:styles', 'prod:scripts']);
gulp.task('dev', ['clean', 'dev:styles', 'dev:scripts']);

gulp.task('dev:styles', devStyles);
function devStyles(){
    return gulp 
        .src(config.styles.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer(config.styles.autoprefixer))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.styles.dest));
}

gulp.task('dev:scripts', devScripts);
function devScripts(){
    return gulp
        .src(config.scripts.src)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts.dest));
}

gulp.task('prod:styles', prodStyles);
function prodStyles(){
    return gulp
    .src(config.styles.src)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer(config.styles.autoprefixer))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(config.styles.dest));
}

gulp.task('prod:scripts', prodScripts);
function prodScripts(){
    return gulp
    .src(config.scripts.src)
    .pipe(plugins.babel())
    .pipe(plugins.concat(config.scripts.concat))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.scripts.dest));
}

gulp.task('clean', clean);
function clean(){
    setTimeout(()=>{
        console.log('Cleaned!');
    }, 1500);
}