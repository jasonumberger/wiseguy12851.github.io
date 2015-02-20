"use strict";

var lazypipe = require('lazypipe');
var del = require("../logic/delete");

var start = require("./start");
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.all = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.client);
          });

exports.fonts = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.fonts);
          });

exports.media = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.media);
          });

exports.partials = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.partials);
          });

exports.scriptsJS = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.javascript + "/**/*.js");
          });

exports.scriptsTS = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.typescript + "/**/*.ts");
          });

exports.scriptsCoffee = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.coffeescript + "/**/*.coffee");
          });

exports.scriptsConcat = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.scripts_concat);
          });

exports.scriptsMinified = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.scripts_minified);
          });

exports.scriptsPrecompile = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.scripts_precompile);
          });

exports.stylesCSS = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.css + "/**/*.css");
          });

exports.stylesLess = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.less + "/**/*.less");
          });

exports.stylesStylus = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(dest.stylus + "/**/*.stylus");
          });

exports.stylesConcat = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.styles_concat);
          });

exports.stylesMinified = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.styles_minified);
          });

exports.stylesPrecompile = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.styles_precompile);
          });

exports.manifest = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              del(prep.manifest);
          });
