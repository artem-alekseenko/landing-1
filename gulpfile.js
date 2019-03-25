const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');

/* -------- Server  -------- */
gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* ------------ Pug compile ------------- */
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
});