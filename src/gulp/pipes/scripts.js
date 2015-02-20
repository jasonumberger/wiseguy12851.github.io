var lazypipe = require('lazypipe');
var start = require("./start");

var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var livereload = require("../logic/livereload");

var jsLibs = require("../../../project/config").gulp.paths.js;
var cssLibs = require("../../../project/config").gulp.paths.css;
var fontLibs = require("../../../project/config").gulp.paths.fonts;
var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.javascript = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = src.javascript;
              var to = dest.javascript;

              // Compile to Javascript
              return gulp.src(from)
                  // Output it to the scripts directory
                  .pipe(gulp.dest(to))
                  .pipe(livereload());
          });

exports.typescript = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = src.typescript;
              var to = dest.typescript;

              // Compile to Javascript
              return gulp.src(from).pipe(
                  ts(
                      {
                          // Try to keep it looking like
                          // Javascript
                          removeComments: false,
                          noImplicitAny: true,
                          noLib: false,
                          target: "ES5",
                          module: "commonjs",
                          declarationFiles: false,
                          noExternalResolve: false
                      }))

                  // Output it to the scripts directory
                  .js.pipe(gulp.dest(to))
                  .pipe(livereload());
          });

exports.process = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              // Make sure when getting all the javascript files that we dont forget
              // the bower javascript files as well, also ensure these go before the
              // user supplied files
              var from = [
                  prep.scripts_precompile,
                  dest.javascript + "/**/*.js"
              ];
              var to = dest.client;

              return gulp.src(from)
                  .pipe(concat("build.js"))
                  .pipe(gulp.dest(to))
                  .pipe(livereload())

                  .pipe(rename("build.min.js"))
                  .pipe(uglify())
                  .pipe(gulp.dest(to))
                  .pipe(livereload());
          });
