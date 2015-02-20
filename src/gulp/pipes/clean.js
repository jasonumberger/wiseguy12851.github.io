"use strict";

var lazypipe = require('lazypipe');
var del = require("../logic/delete");

var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.all = lazypipe()

    .pipe(function()
          {
              del(dest.client);
          });

exports.fonts = lazypipe()

    .pipe(function()
          {
              del(dest.fonts);
          });

exports.media = lazypipe()

    .pipe(function()
          {
              del(dest.media);
          });

exports.partials = lazypipe()

    .pipe(function()
          {
              del(dest.partials);
          });

exports.scriptsJS = lazypipe()

    .pipe(function()
          {
              del(dest.javascript + "/**/*.js");
          });

exports.scriptsTS = lazypipe()

    .pipe(function()
          {
              del(dest.typescript + "/**/*.ts");
          });

exports.scriptsCoffee = lazypipe()

    .pipe(function()
          {
              del(dest.coffeescript + "/**/*.coffee");
          });

exports.scriptsConcat = lazypipe()

    .pipe(function()
          {
              del(prep.scripts_concat);
          });

exports.scriptsMinified = lazypipe()

    .pipe(function()
          {
              del(prep.scripts_minified);
          });

exports.scriptsPrecompile = lazypipe()

    .pipe(function()
          {
              del(prep.scripts_precompile);
          });

exports.stylesCSS = lazypipe()

    .pipe(function()
          {
              del(dest.css + "/**/*.css");
          });

exports.stylesLess = lazypipe()

    .pipe(function()
          {
              del(dest.less + "/**/*.less");
          });

exports.stylesStylus = lazypipe()

    .pipe(function()
          {
              del(dest.stylus + "/**/*.stylus");
          });

exports.stylesConcat = lazypipe()

    .pipe(function()
          {
              del(prep.styles_concat);
          });

exports.stylesMinified = lazypipe()

    .pipe(function()
          {
              del(prep.styles_minified);
          });

exports.stylesPrecompile = lazypipe()

    .pipe(function()
          {
              del(prep.styles_precompile);
          });

exports.manifest = lazypipe()

    .pipe(function()
          {
              del(prep.manifest);
          });
