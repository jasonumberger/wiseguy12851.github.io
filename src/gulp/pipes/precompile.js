var gulp     = require("gulp"),
    lazypipe = require("lazypipe"),
    path = require("path"),
    cache = require("gulp-cached"),
    concat   = require("gulp-concat"),
    // newer   = require("gulp-newer"),
    changed = require("gulp-changed"),

    jsLibs   = require(path.resolve("project", "config")).gulp.paths.js,
    cssLibs  = require(path.resolve("project", "config")).gulp.paths.css,
    fontLibs = require(path.resolve("project", "config")).gulp.paths.fonts,
    src      = require(path.resolve("project", "config")).gulp.paths.src,
    dest     = require(path.resolve("project", "config")).gulp.paths.dest,
    prep     = require(path.resolve("project", "config")).gulp.paths.prep;

exports.scripts =
    lazypipe()
        .pipe(gulp.src, jsLibs)
        // .pipe(newer, path.resolve(dest.client, prep.scriptsPrecompile))
        .pipe(concat, prep.scriptsPrecompile)
        .pipe(gulp.dest, dest.client);

exports.styles =
    lazypipe()
        .pipe(gulp.src, cssLibs)
        // .pipe(newer, path.resolve(dest.client, prep.stylesPrecompile))
        .pipe(concat, prep.stylesPrecompile)
        .pipe(gulp.dest, dest.client);

exports.fonts =
    lazypipe()
        .pipe(gulp.src, fontLibs.concat([src.fonts]))
        .pipe(cache, "precompile-fonts", {optimizeMemory: true})
        .pipe(changed, dest.fonts)
        // .pipe(newer, dest.fonts)
        .pipe(gulp.dest, dest.fonts);
