var gulp     = require("gulp"),
    lazypipe = require("lazypipe"),
    eslint   = require("gulp-eslint"),
    path     = require("path"),
    cache    = require("gulp-cached"),

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
    .pipe(cache, "gulp-eslint", {optimizeMemory: true})
    .pipe(eslint)
    .pipe(eslint.format)
    .pipe(eslint.failOnError);
