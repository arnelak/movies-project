var gulp = require('gulp');
var less = require('gulp-less');
//var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');

gulp.task('less', function(){
    return gulp.src('public/less/style.less')
        //.pipe(sourcemaps.init())
        .pipe(less({compress: true}).on('error', gutil.log))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
});


gulp.task('watch', function() {
    gulp.watch('public/less/*.less', ['less']);
});
