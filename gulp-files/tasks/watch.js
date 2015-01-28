"use strict";

var gulp = require("gulp");
var livereload = require("../config/livereload");

gulp.task("Watch", function()
{
    livereload.listen();

    gulp.watch("./scripts/**/*", ["Prep:Scripts"]);
    gulp.watch("./styles/**/*", ["Prep:Styles"]);

    gulp.watch(
        [
            "./fonts/**/*",
            "./media/**/*",
            "./partials/**/*"
        ], ["Livereload:FullReload"]);
});
