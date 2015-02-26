var gulp = require("gulp");
var lazypipe = require('lazypipe');

var eslint = require("gulp-eslint");

var src = require("../../../project/config").gulp.paths.src;

exports.eslint = lazypipe().pipe(gulp.src, src.gulp)
    .pipe(eslint).pipe(eslint.format).pipe(eslint.failOnError);
