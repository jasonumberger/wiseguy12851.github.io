"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");

var jsLibs = require("../config/js-libraries");
var cssLibs = require("../config/css-libraries");


// Now get all the scripts then concatenate and minify them
gulp.task(
    "Precompile:Scripts", function()
    {
        // Make sure when getting all the javascript files that we dont forget
        // the bower javascript files as well, also ensure these go before the
        // user supplied files
        var from = jsLibs;
        var to = "./generated";

        return gulp.src(from).pipe(concat("precompile.js")).pipe(gulp.dest(to));
    });

gulp.task(
    "Precompile:Styles", function()
    {
        // Make sure when getting all the javascript files that we dont forget
        // the bower javascript files as well, also ensure these go before the
        // user supplied files
        var from = cssLibs;
        var to = "./generated";

        return gulp.src(from).pipe(concat("precompile.css")).pipe(gulp.dest(to));
    });

var fontLibs = require("../config/font-libraries");

// Copy fontawesome and any other fonts to the fonts directory
gulp.task(
    "Precompile:Fonts", function()
    {
        var from = fontLibs.concat(["./fonts/**/*"]);
        var to = "./generated/fonts";

        return gulp.src(from).pipe(gulp.dest(to));
    });

gulp.task(
    "Precompile", [
        "Precompile:Scripts",
        "Precompile:Styles",
        "Precompile:Fonts"
    ]);
