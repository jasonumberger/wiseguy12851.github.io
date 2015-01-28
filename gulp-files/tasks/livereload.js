"use strict";

var gulp = require("gulp");
var livereload = require("../config/livereload");

gulp.task("Livereload:FullReload", function()
{
    livereload.reload();
});
