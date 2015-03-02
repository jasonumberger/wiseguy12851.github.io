var lazypipe = require("lazypipe"),
    gulp = require("gulp"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    stylus = require("gulp-stylus"),
    autoprefix = require("gulp-autoprefixer"),
    minifyCss = require("gulp-minify-css"),
    nib = require("nib"), path = require("path"),
    cache = require("gulp-cached"),
    changed = require("gulp-changed"),
    less = require('gulp-less'),
    newer = require("gulp-newer"),

    livereloadPipes = require(path.resolve("src", "gulp", "pipes",
        "livereload")),

    stylusLibs = require(path.resolve("project", "config")).gulp.paths.stylus,
    src = require(path.resolve("project", "config")).gulp.paths.src,
    dest       = require(path.resolve("project", "config")).gulp.paths.dest,
    prep       = require(path.resolve("project", "config")).gulp.paths.prep;

exports.css =
    lazypipe()
        .pipe(gulp.src, src.css)
        .pipe(cache, "styles-css", {optimizeMemory: true})
        .pipe(changed, dest.css)
        .pipe(newer, dest.css)
        .pipe(autoprefix)
        .pipe(gulp.dest, dest.css)
        .pipe(livereloadPipes.normal);

exports.less =
    lazypipe()
        .pipe(gulp.src, src.less)
        .pipe(cache, "styles-less", {optimizeMemory: true})
        .pipe(changed, dest.less, {extension: ".css"})
        .pipe(newer, {
            dest: dest.less,
            ext:  ".css"
        })
        .pipe(less, src.less)
        .pipe(autoprefix)
        .pipe(gulp.dest, dest.less)
        .pipe(livereloadPipes.normal);

exports.stylus =
    lazypipe()
        .pipe(gulp.src, src.stylus)
        .pipe(cache, "styles-stylus", {optimizeMemory: true})
        .pipe(changed, dest.stylus, {extension: ".css"})
        .pipe(newer, {
            dest: dest.stylus,
            ext:  ".css"
        })
        .pipe(stylus, {

            // Preset some variables
            define:   {},

            // Search paths for @import
            include:  stylusLibs,

            // Files to import anyways
            "import": [],

            // Extend features and capability of stylus
            use:      [
                nib()
            ]
        })
        .pipe(autoprefix)
        .pipe(gulp.dest, dest.stylus)
        .pipe(livereloadPipes.normal);

exports.concat =
    lazypipe()
        .pipe(gulp.src, [
            path.resolve(dest.client, prep.stylesPrecompile),
            path.resolve(dest.css, "**", "*.css"),
            path.resolve(dest.less, "**", "*.css"),
            path.resolve(dest.stylus, "**", "*.css")
        ])
        .pipe(newer, path.resolve(dest.client, prep.stylesConcat))
        .pipe(concat, prep.stylesConcat)
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);

exports.concatMinify =
    exports.concat
        .pipe(newer, path.resolve(dest.client, prep.stylesMinified))
        .pipe(rename, prep.stylesMinified)
        .pipe(minifyCss)
        .pipe(gulp.dest, dest.client);
