"use strict";

var gulp = require("gulp");
var livereload = require("../logic/livereload");

gulp.task(
    "default", [
        "Build"
    ], function()
    {
        livereload.reload();
    });
