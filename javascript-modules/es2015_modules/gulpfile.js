
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('systemjs', ()=> {
    return gulp.src('././node_modules/requirejs/require.js').pipe(gulp.dest('dist'));
})

gulp.task('html', ()=> {
    return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('css', ()=> {
    return gulp.src('src/**/*.css').pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
    return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', ()=> {
    return del('dist');
});




gulp.task('default', gulp.series('html', 'css', 'js', 'systemjs'));