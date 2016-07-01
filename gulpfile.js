var gulp = require('gulp'),
    less = require('gulp-less'),
    util = require('gulp-util'),
    del = require('del');

gulp.task('clean', function() {
    return del([
        'dist/**/*.css'
    ]);
});

gulp.task('less', function () {
    var stream = gulp.src('src/css-helper.less')
        .pipe(less());
    stream.on('error', function (e) {
        util.log(e);
        stream.end();
    });
    return stream.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['less'], function () {
    gulp.watch('styles/less/*.less', ['less']);
});

gulp.task('build', ['clean'], function () {
    gulp.start(['less']);
});

gulp.task('default', ['build']);