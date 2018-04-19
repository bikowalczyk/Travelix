const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
 
gulp.task('prefix-css', () =>
    gulp.src('public/css/main.css')
    .pipe(rename("css/main-prefixed.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/'))
);


 
gulp.task("uglify", function () {
    return gulp.src("public/js/script.js")
        .pipe(rename("js/script-min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("public/dist/"));
});


 
gulp.task('minify-css', () => {
  return gulp.src('public/css/main-prefixed.css')
    .pipe(rename("css/main-min.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist'));
});