"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var stylus = require("gulp-stylus");
var autoprefix = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");
var nib = require("nib");
var livereload = require("../config/livereload");

var stylusLibs = require("../config/stylus-libraries");

// Copy over CSS
gulp.task(
    "Prep:CSS", function()
    {
        var from = "./src/styles/**/*.css";
        var to = "./src/generated";

        // Compile to Javascript
        return gulp.src(from)
            // Output it to the scripts directory
            .pipe(gulp.dest(to)).pipe(livereload());
    });

// Compile and copy over Stylus
gulp.task(
    "Prep:Stylus", function()
    {
        var from = "./src/styles/**/*.styl";
        var to = "./src/generated";

        var searchPaths = ["./src/styles"];
        searchPaths = searchPaths.concat(stylusLibs);

        return gulp.src(from).pipe(
            stylus(
                {

                    // Preset some variables
                    define: {},

                    // Search paths for @import
                    include: searchPaths,

                    // Files to import anyways
                    "import": [],

                    // Extend features and capability of stylus
                    use: [
                        nib()
                    ]
                }))

            // Auto prefix for last 2 versions of each browser
            .pipe(autoprefix("last 2 version"))

            // Throw compiled css files to the styles directory
            .pipe(gulp.dest(to)).pipe(livereload());
    });

// Concat and Minify Styles
gulp.task(
    "Prep:Styles", ["Prep:CSS", "Prep:Stylus"], function()
    {
        // Combine CSS libraries with user ones
        // Concat the libraries first in the order given above
        // followed by the user libraries in alphabetical order
        var from = [
            "./src/generated/precompile.css", "./generated/**/*.css"
        ];
        var to = "./src/";

        return gulp.src(from)

            // Concatenate all javascript files into one
            // to place some files before or after, use alphabetical
            // ordering on the necasary files names
            // output to build diretory
            .pipe(concat("build.css")).pipe(gulp.dest(to)).pipe(livereload())

            // Then compress it down tight and
            // output to same directory under .min.js
            .pipe(rename("build.min.css")).pipe(minifyCss()).pipe(gulp.dest(to)).pipe(livereload());
    });
