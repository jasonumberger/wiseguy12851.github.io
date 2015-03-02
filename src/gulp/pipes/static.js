var gulp = require("gulp"),
    lazypipe = require("lazypipe"),
    path = require("path"),
    cache = require("gulp-cached"),
    changed = require("gulp-changed"),
    imagemin = require("gulp-imagemin"),
    rename = require("gulp-rename"),
    pngcrush = require('imagemin-pngcrush'),
    newer = require("gulp-newer"),

    livereloadPipes = require(path.resolve("src", "gulp", "pipes",
        "livereload")),

    src  = require(path.resolve("project", "config")).gulp.paths.src,
    dest = require(path.resolve("project", "config")).gulp.paths.dest;

exports.client =
    lazypipe()
        .pipe(gulp.src, src.client)
        .pipe(cache, "static-client", {optimizeMemory: true})
        .pipe(changed, dest.client)
        .pipe(newer, dest.client)
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);

exports.minifyImages =
    lazypipe()
        .pipe(gulp.src, [
            path.resolve(src.media, "**", "*.jpg"),
            path.resolve(src.media, "**", "*.jpeg"),
            path.resolve(src.media, "**", "*.png"),
            path.resolve(src.media, "**", "*.gif"),
            path.resolve(src.media, "**", "*.svg")
        ])
        .pipe(cache, "static-minify-images", {optimizeMemory: true})
        .pipe(changed, dest.media)
        .pipe(newer, dest.media)
        .pipe(rename, function doImageminRename(path)
        {
            "use strict";

            path.extname = ".min" + path.extname;
        })
        .pipe(imagemin, {
            optimizationLevel: 7,
            progressive:       true,
            interlaced:        true,
            multipass:         true,
            svgoPlugins:       [
                {removeViewBox: false}, {removeUselessStrokeAndFill: false}
            ],
            use:               [pngcrush()]
        })
        .pipe(gulp.dest, dest.media)
        .pipe(livereloadPipes.normal);

exports.media =
    lazypipe()
        .pipe(gulp.src, src.media)
        .pipe(cache, "static-media", {optimizeMemory: true})
        .pipe(changed, dest.media)
        .pipe(newer, dest.media)
        .pipe(gulp.dest, dest.media)
        .pipe(livereloadPipes.normal);

exports.partials =
    lazypipe()
        .pipe(gulp.src, src.partials)
        .pipe(cache, "static-partials", {optimizeMemory: true})
        .pipe(changed, dest.partials)
        .pipe(newer, dest.partials)
        .pipe(gulp.dest, dest.partials)
        .pipe(livereloadPipes.normal);

exports.typescript =
    lazypipe()
        .pipe(gulp.src, src.typescript)
        .pipe(cache, "static-typescript", {optimizeMemory: true})
        .pipe(changed, dest.typescript)
        .pipe(newer, dest.typescript)
        .pipe(gulp.dest, dest.typescript)
        .pipe(livereloadPipes.normal);

exports.coffeescript =
    lazypipe()
        .pipe(gulp.src, src.coffeescript)
        .pipe(cache, "static-coffeescript", {optimizeMemory: true})
        .pipe(changed, dest.coffeescript)
        .pipe(newer, dest.coffeescript)
        .pipe(gulp.dest, dest.coffeescript)
        .pipe(livereloadPipes.normal);

exports.less =
    lazypipe()
        .pipe(gulp.src, src.less)
        .pipe(cache, "static-less", {optimizeMemory: true})
        .pipe(changed, dest.less)
        .pipe(newer, dest.less)
        .pipe(gulp.dest, dest.less)
        .pipe(livereloadPipes.normal);

exports.stylus =
    lazypipe()
        .pipe(gulp.src, src.stylus)
        .pipe(cache, "static-stylus", {optimizeMemory: true})
        .pipe(changed, dest.stylus)
        .pipe(newer, dest.less)
        .pipe(gulp.dest, dest.stylus)
        .pipe(livereloadPipes.normal);
