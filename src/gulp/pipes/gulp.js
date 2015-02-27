var gulp     = require("gulp"),
    lazypipe = require("lazypipe"),
    eslint   = require("gulp-eslint"),
    path     = require("path"),

    src      = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.src;

exports.eslint = lazypipe()
    .pipe(
    gulp.src,
    src.gulp
)
    .pipe(eslint)
    .pipe(eslint.format)
    .pipe(eslint.failOnError);
