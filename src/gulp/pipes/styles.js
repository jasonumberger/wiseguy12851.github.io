var lazypipe        = require("lazypipe"),
    gulp            = require("gulp"),

    concat          = require("gulp-concat"),
    rename          = require("gulp-rename"),
    stylus          = require("gulp-stylus"),
    autoprefix      = require("gulp-autoprefixer"),
    minifyCss       = require("gulp-minify-css"),
    nib             = require("nib"),
    path            = require("path"),
    livereloadPipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "livereload"
        )),

    stylusLibs      = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.stylus,

    src             = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.src,

    dest            = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.dest,

    prep            = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.prep;

exports.css = lazypipe().pipe(
    gulp.src,
    src.css
).pipe(
    gulp.dest,
    dest.css
);

exports.cssLive = exports.css
    .pipe(livereloadPipes.normal);

exports.cssPrefix = exports.css
    .pipe(autoprefix);

exports.cssPrefixLive = exports.css
    .pipe(autoprefix)
    .pipe(exports.cssLive);

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

exports.stylusLive = exports.stylus
    .pipe(livereloadPipes.normal);

exports.stylusPrefix = exports.stylus
    .pipe(autoprefix);

exports.stylusPrefixLive = exports.stylus
    .pipe(autoprefix)
    .pipe(exports.stylusLive);

exports.concat = lazypipe().pipe(
    gulp.src,
    [
        path.resolve(
            dest.client,
            prep.stylesPrecompile
        ),
        path.resolve(
            dest.css,
            "**",
            "*.css"
        ),
        path.resolve(
            dest.less,
            "**",
            "*.css"
        ),
        path.resolve(
            dest.stylus,
            "**",
            "*.css"
        )
    ]
).pipe(
    concat,
    prep.stylesConcat
).pipe(
    gulp.dest,
    dest.client
);

exports.concatLive = exports.concat
    .pipe(livereloadPipes.normal);

exports.concatMinify = exports.concat.pipe(
    rename,
    prep.stylesMinified
).pipe(minifyCss).pipe(
    gulp.dest,
    dest.client
);

exports.concatMinifyLive = exports.concatLive
    .pipe(exports.concatMinify)
    .pipe(livereloadPipes.normal);
