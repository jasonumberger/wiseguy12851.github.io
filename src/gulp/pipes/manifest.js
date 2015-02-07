"use strict";

var lazypipe = require('lazypipe');
var manifest = require("gulp-manifest");
var livereload = require("../logic/livereload");
var start = require("./start");
var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

module.exports = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              var from = dest.client + "/**/*";
              var to = prep.manifest;

              gulp.src(from).pipe(
                  manifest(
                      {
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

                      }))
                  .pipe(gulp.dest(to))
                  .pipe(livereload());
          });
