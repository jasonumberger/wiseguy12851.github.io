var lazypipe = require("lazypipe"),
    gzip     = require("gulp-gzip"),
    tar      = require("gulp-tar"),
    zip      = require("gulp-zip"),
    path     = require("path"),
    gulp     = require("gulp"),
    newer    = require('gulp-newer'),

    dest     = require(path.resolve("project", "config")).gulp.paths.dest,
    prep     = require(path.resolve("project", "config")).gulp.paths.prep;

exports.zip =
    lazypipe()
        .pipe(gulp.src, path.resolve(dest.client, "**", "*"))
        .pipe(newer, path.resolve(dest.root, prep.archiveZip))
        .pipe(zip, prep.archiveZip)
        .pipe(gulp.dest, dest.root);

exports.gzip =
    lazypipe()
        .pipe(gulp.src, path.resolve(dest.client, "**", "*"))
        .pipe(newer, path.resolve(dest.root, prep.archiveTar + ".gz"))
        .pipe(tar, prep.archiveTar)
        .pipe(gzip)
        .pipe(gulp.dest, dest.root);
