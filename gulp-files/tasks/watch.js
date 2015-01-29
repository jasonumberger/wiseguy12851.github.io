"use strict";

var gulp = require("gulp");
var livereload = require("../config/livereload");

gulp.task("Watch", function()
{
    livereload.listen();

    gulp.watch("./src/scripts/**/*", ["Prep:Scripts"]);
    gulp.watch("./src/styles/**/*", ["Prep:Styles"]);

    gulp.watch(
        [
            "./src/fonts/**/*",
            "./src/media/**/*",
            "./src/partials/**/*"
        ], ["Livereload:FullReload"]);
});
