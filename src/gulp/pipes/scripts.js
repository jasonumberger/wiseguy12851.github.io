var gulp = require("gulp");
var lazypipe = require('lazypipe');

var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var livereloadPipes = require("./livereload");

var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.javascript = lazypipe()
    .pipe(gulp.src, src.javascript)
    .pipe(gulp.dest, dest.javascript);

exports.javascriptLive = exports.javascript
    .pipe(livereloadPipes.normal);

exports.typescript = lazypipe()
    .pipe(gulp.src, src.typescript)
    .pipe(function()
           {
               return ts({
                   // Try to keep it looking like
                   // Javascript
                   removeComments: false,
                   noImplicitAny: true,
                   noLib: false,
                   target: "ES5",
                   module: "commonjs",
                   declarationFiles: false,
                   noExternalResolve: false
               }).js;
           })
    .pipe(gulp.dest, dest.typescript);

exports.typescriptLive = exports.typescript
    .pipe(livereloadPipes.normal);

exports.concat = lazypipe()
    .pipe(gulp.src,
          [
              dest.client + "/" + prep.scripts_precompile,
              dest.javascript + "/**/*.js",
              dest.typescript + "/**/*.js"
          ])
    .pipe(concat, prep.scripts_concat)
    .pipe(gulp.dest, dest.client);

exports.concatLive = exports.concat
    .pipe(livereloadPipes.normal);

exports.concatMinify = exports.concat
    .pipe(rename, prep.scripts_minified)
    .pipe(uglify)
    .pipe(gulp.dest, dest.client);

exports.concatMinifyLive = exports.concatLive
    .pipe(exports.concatMinify)
    .pipe(livereloadPipes.normal);
