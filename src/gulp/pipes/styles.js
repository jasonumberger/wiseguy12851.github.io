var lazypipe = require('lazypipe');
var gulp = require("gulp");

var concat = require("gulp-concat");
var rename = require("gulp-rename");
var stylus = require("gulp-stylus");
var autoprefix = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");
var nib = require("nib");
var livereloadPipes = require("./livereload");

var stylusLibs = require("../../../project/config").gulp.paths.stylus;
var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.css = lazypipe().pipe(
    gulp.src,
    src.css
).pipe(
    gulp.dest,
    dest.css
);

exports.cssLive = exports.css.pipe(livereloadPipes.normal);

exports.cssPrefix = exports.css.pipe(autoprefix);

exports.cssPrefixLive = exports.css.pipe(autoprefix).pipe(exports.cssLive);

exports.stylus = lazypipe().pipe(
    gulp.src,
    src.stylus
).pipe(
    stylus,
    {

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
    }
).pipe(
    gulp.dest,
    dest.stylus
);

exports.stylusLive = exports.stylus.pipe(livereloadPipes.normal);

exports.stylusPrefix = exports.stylus.pipe(autoprefix);

exports.stylusPrefixLive =
exports.stylus.pipe(autoprefix).pipe(exports.stylusLive);

exports.concat = lazypipe().pipe(
    gulp.src,
    [
        dest.client + "/" + prep.styles_precompile,
        dest.css + "/**/*.css",
        dest.less + "/**/*.css",
        dest.stylus + "/**/*.css"
    ]
).pipe(
    concat,
    prep.styles_concat
).pipe(
    gulp.dest,
    dest.client
);

exports.concatLive = exports.concat.pipe(livereloadPipes.normal);

exports.concatMinify = exports.concat.pipe(
    rename,
    prep.styles_minified
).pipe(minifyCss).pipe(
    gulp.dest,
    dest.client
);

exports.concatMinifyLive =
exports.concatLive.pipe(exports.concatMinify).pipe(livereloadPipes.normal);
