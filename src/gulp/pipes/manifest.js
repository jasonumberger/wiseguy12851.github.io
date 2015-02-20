"use strict";

var gulp = require("gulp");
var lazypipe = require('lazypipe');
var manifest = require("gulp-manifest");
var livereloadPipes = require("./livereload");
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.regular = lazypipe()
    .pipe(gulp.src, dest.client + "/**/*")
    .pipe(manifest, {
              filename: prep.manifest,
              exclude: [
                  prep.manifest
              ],

              network: [
                  "*"
              ],

              fallback: [

              ],

              preferOnline: false,

              timestamp: false,
              hash: true

          })
    .pipe(gulp.dest, dest.client);

exports.regularLive = exports.regular
    .pipe(livereloadPipes.normal);
