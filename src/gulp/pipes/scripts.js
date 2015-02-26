var gulp = require("gulp");
var lazypipe = require('lazypipe');

var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var livereloadPipes = require("./livereload");
var browserify = require("browserify");
var _ = require('lodash');
var source = require('vinyl-source-stream');
var eslint = require("gulp-eslint");

var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.javascript = lazypipe().pipe(
    gulp.src,
    src.javascript
).pipe(
    gulp.dest,
    dest.javascript
);

exports.javascriptLive = exports.javascript.pipe(livereloadPipes.normal);

exports.typescript = lazypipe().pipe(
    gulp.src,
    src.typescript
).pipe(
    function()
    {
        return ts(
            {
                // Try to keep it looking like
                // Javascript
                removeComments:    false,
                noImplicitAny:     false,
                noLib:             false,
                noEmitOnError:     true,
                target:            "ES5",
                module:            "commonjs",
                declarationFiles:  false,
                noExternalResolve: false
            }
        ).js;
    }
).pipe(
    gulp.dest,
    dest.typescript
);

exports.typescriptLive = exports.typescript.pipe(livereloadPipes.normal);

exports.eslint = lazypipe().pipe(
    gulp.src,
    [
        dest.javascript + "/**/*.js",
        dest.typescript + "/**/*.js",
        dest.coffeescript + "/**/*.js"
    ]
).pipe(eslint).pipe(eslint.format).pipe(eslint.failOnError);

exports.eslintLive = exports.eslint.pipe(livereloadPipes.normal);

exports.browserify = lazypipe().pipe(
    function()
    {
        // Using entry point now for better organization
        // Takes possibly different entry points for each language
        // and strips entry points that have the exact same path
        var files = [
            require("path").resolve(
                __dirname,
                "../../..",
                dest.javascript
            ) + "/index.js",
            require("path").resolve(
                __dirname,
                "../../..",
                dest.typescript
            ) + "/index.js"
        ];
        files = _.uniq(files);

        // Then return a useable stream from the bundling
        return browserify(files).bundle().pipe(source(prep.scriptsBrowserify));
    }
).pipe(
    gulp.dest,
    dest.client
);

exports.browserifyLive = exports.browserify.pipe(livereloadPipes.normal);

exports.concat = lazypipe().pipe(
    gulp.src,
    [
        dest.client + "/" + prep.scriptsPrecompile,
        dest.client + "/" + prep.scriptsBrowserify
    ]
).pipe(
    concat,
    prep.scriptsConcat
).pipe(
    gulp.dest,
    dest.client
);

exports.concatLive = exports.concat.pipe(livereloadPipes.normal);

exports.concatMinify = exports.concat.pipe(
    rename,
    prep.scriptsMinified
).pipe(uglify).pipe(
    gulp.dest,
    dest.client
);

exports.concatMinifyLive =
exports.concatLive.pipe(exports.concatMinify).pipe(livereloadPipes.normal);
