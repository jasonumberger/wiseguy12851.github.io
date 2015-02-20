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

exports.css = lazypipe()

    .pipe(function()
          {
              var from = src.css;
              var to = dest.css;

              // Compile to Javascript
              return gulp.src(from)
                  // Output it to the scripts directory
                  .pipe(gulp.dest(to))
                  .pipe(livereloadPipes.normal());
          });

exports.stylus = lazypipe()

    .pipe(function()
          {
              var from = src.stylus;
              var to = dest.stylus;

              return gulp.src(from).pipe(
                  stylus(
                      {

                          // Preset some variables
                          define: {},

                          // Search paths for @import
                          include: stylusLibs,

                          // Files to import anyways
                          "import": [],

                          // Extend features and capability of stylus
                          use: [
                              nib()
                          ]
                      }))

                  // Auto prefix for last 2 versions of each browser
                  .pipe(autoprefix("last 2 version"))

                  // Throw compiled css files to the styles directory
                  .pipe(gulp.dest(to)).pipe(livereloadPipes.normal());
          });

exports.process = lazypipe()

    .pipe(function()
          {
              // Make sure when getting all the javascript files that we dont forget
              // the bower javascript files as well, also ensure these go before the
              // user supplied files
              var from = [
                  dest.client + "/" + prep.styles_precompile,
                  dest.css + "/**/*.css",
                  dest.less + "/**/*.css",
                  dest.stylus + "/**/*.css"
              ];
              var to = dest.client;

              return gulp.src(from)

                  // Concatenate all javascript files into one
                  // to place some files before or after, use alphabetical
                  // ordering on the necasary files names
                  // output to build diretory
                  .pipe(concat(prep.styles_concat))
                  .pipe(gulp.dest(to))
                  .pipe(livereloadPipes.normal())

                  // Then compress it down tight and
                  // output to same directory under .min.js
                  .pipe(rename(prep.styles_minified))
                  .pipe(minifyCss())
                  .pipe(gulp.dest(to))
                  .pipe(livereloadPipes.normal());
          });
