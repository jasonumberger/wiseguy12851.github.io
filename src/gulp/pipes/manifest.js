"use strict";

var gulp = require("gulp");
var lazypipe = require('lazypipe');
var manifest = require("gulp-manifest");
var livereloadPipes = require("./livereload");
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

exports.manifest = lazypipe()
    .pipe(manifest, {
         filename: "app.manifest",
         exclude: [
             "app.manifest"
         ],

         network: [
             "*"
         ],

         fallback: [

         ],

         preferOnline: false,

         timestamp: false,
         hash: true

     });

exports.process = lazypipe()
    .pipe(function()
          {
              var from = dest.client + "/**/*";
              var to = prep.manifest;

              gulp.src(from)
                  .pipe(exports.manifest())
                  .pipe(gulp.dest(to))
                  .pipe(livereloadPipes.normal());
          });
