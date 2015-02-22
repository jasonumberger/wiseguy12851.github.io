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
var read = require('fs-readdir-recursive');

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

exports.browserify = lazypipe()
    .pipe(function()
          {
              // Gather all script files
              var jsFiles = read(require("path").resolve(__dirname,  "../../..", dest.javascript));
              var tsFiles = read(require("path").resolve(__dirname,  "../../..", dest.typescript));

              // Make them absolute
              _.forEach(jsFiles, function(file, index, _files)
                        {
                            jsFiles[index] = require("path").resolve(__dirname,  "../../..", dest.javascript) + "/" + file;
                        }, this);

              _.forEach(tsFiles, function(file, index, _files)
              {
                  tsFiles[index] = require("path").resolve(__dirname,  "../../..", dest.typescript) + "/" + file;
              }, this);

              // Combine them
              var files = jsFiles.concat(tsFiles);
              var newFiles = [];

              // and remove duplicates
              files = _.uniq(files);

              // Now strip non-javascript files
              _.forEach(files, function(file, index, _files)
                        {
                            if(!_.endsWith(file, ".js")) return;
                            newFiles.push(file);
                        }, this);

              // Then sort these files in alphabetical ordering
              newFiles.sort();

              // Then return a useable stream from the bundling
              return browserify(newFiles).bundle()
                  .pipe(source(prep.scripts_browserify));
          })
    .pipe(gulp.dest, dest.client);

exports.browserifyLive = exports.browserify
    .pipe(livereloadPipes.normal);

exports.concat = lazypipe()
    .pipe(gulp.src,
          [
              dest.client + "/" + prep.scripts_precompile,
              dest.client + "/" + prep.scripts_browserify
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
