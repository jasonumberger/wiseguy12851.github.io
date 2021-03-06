var gulp            = require("gulp"),
    lazypipe        = require("lazypipe"),
    manifest        = require("gulp-manifest"),
    path            = require("path"),
    // newer           = require('gulp-newer'),

    livereloadPipes = require(path.resolve("src", "gulp", "pipes",
        "livereload")),

    dest            = require(path.resolve("project",
        "config")).gulp.paths.dest,

    prep            = require(path.resolve("project",
        "config")).gulp.paths.prep;

exports.regular =
    lazypipe()
        .pipe(gulp.src, path.resolve(dest.client, "**", "*"))
        // .pipe(newer, path.resolve(dest.client, prep.manifest))
        .pipe(manifest, {
            filename: prep.manifest,
            exclude:  [
                prep.manifest
            ],

            network: [
                "*"
            ],

            fallback: [],

            preferOnline: false,

            timestamp: false,
            hash:      true

        })
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);
