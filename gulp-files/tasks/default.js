"use strict";

var gulp = require("gulp");
var livereload = require("../config/livereload");

gulp.task(
    "default", [
        "Build"
    ], function()
    {
        livereload.reload();
    });
