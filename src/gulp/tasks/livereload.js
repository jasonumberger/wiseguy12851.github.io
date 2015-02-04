"use strict";

var gulp = require("gulp");
var livereload = require("../logic/livereload");

gulp.task("Livereload:FullReload", function()
{
    livereload.reload();
});
