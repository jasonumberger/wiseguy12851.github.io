var lazypipe = require("lazypipe"),
    gzip    = require("gulp-gzip"),
    tar = require("gulp-tar"),
    zip = require("gulp-zip"),
    path = require("path"),
    gulp = require("gulp"),

    dest = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.dest,

    prep = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.prep;

exports.zip = lazypipe()
    .pipe(gulp.src, path.resolve(dest.client, "**", "*"))
    .pipe(zip,  prep.archiveZip)
    .pipe(gulp.dest, dest.root);

exports.gzip = lazypipe()
    .pipe(gulp.src, path.resolve(dest.client, "**", "*"))
    .pipe(tar, prep.archiveTar)
    .pipe(gzip)
    .pipe(gulp.dest, dest.root);
