"use strict";

var lazypipe = require('lazypipe');
var del = require("../logic/delete");

var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.all = lazypipe()
    .pipe(function(cb)
          {
              del(dest.client, cb);
          });

exports.fonts = lazypipe()
    .pipe(function(cb)
          {
              del(dest.fonts, cb);
          });

exports.media = lazypipe()
    .pipe(function(cb)
          {
              del(dest.media, cb);
          });

exports.partials = lazypipe()
    .pipe(function(cb)
          {
              del(dest.partials, cb);
          });

exports.scriptsJS = lazypipe()
    .pipe(function(cb)
          {
              del(dest.javascript + "/**/*.js", cb);
          });

exports.scriptsTS = lazypipe()
    .pipe(function(cb)
          {
              del(dest.typescript + "/**/*.ts", cb);
          });

exports.scriptsCoffee = lazypipe()
    .pipe(function(cb)
          {
              del(dest.coffeescript + "/**/*.coffee", cb);
          });

exports.scriptsConcat = lazypipe()
    .pipe(function(cb)
          {
              del(prep.scripts_concat, cb);
          });

exports.scriptsMinified = lazypipe()
    .pipe(function(cb)
          {
              del(prep.scripts_minified, cb);
          });

exports.scriptsPrecompile = lazypipe()
    .pipe(function(cb)
          {
              del(prep.scripts_precompile, cb);
          });

exports.stylesCSS = lazypipe()
    .pipe(function(cb)
          {
              del(dest.css + "/**/*.css", cb);
          });

exports.stylesLess = lazypipe()
    .pipe(function(cb)
          {
              del(dest.less + "/**/*.less", cb);
          });

exports.stylesStylus = lazypipe()
    .pipe(function(cb)
          {
              del(dest.stylus + "/**/*.stylus", cb);
          });

exports.stylesConcat = lazypipe()
    .pipe(function(cb)
          {
              del(prep.styles_concat, cb);
          });

exports.stylesMinified = lazypipe()
    .pipe(function(cb)
          {
              del(prep.styles_minified, cb);
          });

exports.stylesPrecompile = lazypipe()
    .pipe(function(cb)
          {
              del(prep.styles_precompile, cb);
          });

exports.manifest = lazypipe()
    .pipe(function(cb)
          {
              del(prep.manifest, cb);
          });
