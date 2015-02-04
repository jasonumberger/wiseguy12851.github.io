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
          });

exports.fonts = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.fonts, cb);
          });

exports.media = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.media, cb);
          });

exports.partials = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.partials, cb);
          });

exports.scriptsJS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.javascript + "/**/*.js", cb);
          });

exports.scriptsTS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.typescript + "/**/*.ts", cb);
          });

exports.scriptsCoffee = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.coffeescript + "/**/*.coffee", cb);
          });

exports.scriptsConcat = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_concat, cb);
          });

exports.scriptsMinified = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_minified, cb);
          });

exports.scriptsPrecompile = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.scripts_precompile, cb);
          });

exports.stylesCSS = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(dest.css + "/**/*.css", cb);
          });

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
          });

exports.stylesConcat = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_concat, cb);
          });

exports.stylesMinified = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_minified, cb);
          });

exports.stylesPrecompile = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.styles_precompile, cb);
          });

exports.manifest = lazypipe()
    .pipe(startPipe)
    .pipe(function(cb)
          {
              del(prep.manifest, cb);
          });
