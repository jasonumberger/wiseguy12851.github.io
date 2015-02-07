"use strict";

var lazypipe = require('lazypipe');
var start = require("./start");

var concat = require("gulp-concat");

var jsLibs = require("../../../project/config").gulp.paths.js;
var cssLibs = require("../../../project/config").gulp.paths.css;
var fontLibs = require("../../../project/config").gulp.paths.fonts;
var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.scripts = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = jsLibs;
              var to = dest.client;

              return gulp.src(from)
                  .pipe(concat(prep.scripts_precompile))
                  .pipe(gulp.dest(to));
          });

exports.styles = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = cssLibs;
              var to = dest.client;

              return gulp.src(from)
                  .pipe(concat(prep.styles_precompile))
                  .pipe(gulp.dest(to));
          });

exports.fonts = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = fontLibs.concat([src.fonts]);
              var to = dest.fonts;

              return gulp.src(from)
                  .pipe(gulp.dest(to));
          });
