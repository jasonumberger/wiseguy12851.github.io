"use strict";

var lazypipe = require('lazypipe');
var del = require("../logic/delete");

var startPipe = require("./start");
var endPipe = require("./end");
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.all = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.client, cb);
          })
    .pipe(endPipe);

exports.fonts = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.fonts, cb);
          })
    .pipe(endPipe);

exports.media = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.media, cb);
          })
    .pipe(endPipe);

exports.partials = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.partials, cb);
          })
    .pipe(endPipe);

exports.scriptsJS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.javascript + "/**/*.js", cb);
          })
    .pipe(endPipe);

exports.scriptsTS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.typescript + "/**/*.ts", cb);
          })
    .pipe(endPipe);

exports.scriptsCoffee = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.coffeescript + "/**/*.coffee", cb);
          })
    .pipe(endPipe);

exports.scriptsConcat = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_concat, cb);
          })
    .pipe(endPipe);

exports.scriptsMinified = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_minified, cb);
          })
    .pipe(endPipe);

exports.scriptsPrecompile = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_precompile, cb);
          })
    .pipe(endPipe);

exports.stylesCSS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.css + "/**/*.css", cb);
          })
    .pipe(endPipe);

exports.stylesLess = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.less + "/**/*.less", cb);
          });

exports.stylesStylus = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.stylus + "/**/*.stylus", cb);
          })
    .pipe(endPipe);

exports.stylesConcat = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_concat, cb);
          })
    .pipe(endPipe);

exports.stylesMinified = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_minified, cb);
          })
    .pipe(endPipe);

exports.stylesPrecompile = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_precompile, cb);
          })
    .pipe(endPipe);

exports.manifest = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.manifest, cb);
          })
    .pipe(endPipe);
