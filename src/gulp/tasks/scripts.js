"use strict";

var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var livereload = require("../logic/livereload");

// Copy over  javascript
gulp.task(
    "Prep:Javascript", function()
    {
        var from = "./src/scripts/**/*.js";
        var to = "./src/generated";

        // Compile to Javascript
        return gulp.src(from)
            // Output it to the scripts directory
            .pipe(gulp.dest(to)).pipe(livereload());
    });

// Compile and copy over Typescript
gulp.task(
    "Prep:Typescript", function()
    {
        var from = "./src/scripts/**/*.ts";
        var to = "./src/generated";

        // Compile to Javascript
        return gulp.src(from).pipe(
            ts(
                {
                    // Try to keep it looking like
                    // Javascript
                    removeComments: false,
                    noImplicitAny: true,
                    noLib: false,
                    target: "ES5",
                    module: "amd",
                    declarationFiles: false,
                    noExternalResolve: false
                }))

            // Output it to the scripts directory
            .js.pipe(gulp.dest(to)).pipe(livereload());
    });

// Now get all the scripts then concatenate and minify them
gulp.task(
    "Prep:Scripts", ["Prep:Javascript", "Prep:Typescript"], function()
    {
        // Make sure when getting all the javascript files that we dont forget
        // the bower javascript files as well, also ensure these go before the
        // user supplied files
        var from = [
            "./src/generated/precompile.js",
            "./src/generated/02-custom/00-modules/**/*.js",
            "./src/generated/**/*.js"
        ];
        var to = "./src/";

        return gulp.src(from).pipe(concat("build.js")).pipe(gulp.dest(to)).pipe(livereload()).pipe(rename("build.min.js")).pipe(uglify()).pipe(gulp.dest(to)).pipe(livereload());
    });
