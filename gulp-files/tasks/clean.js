"use strict";

var gulp = require("gulp");
var del = require("del");

// Erase the build folder, this erases everything that gulp ever processed or touched
// resulting in a complete revert of anything gulp might have done

gulp.task("Clean:GeneratedCSS", function(cb)
{
    del("./generated/**/*.css", cb);
});

gulp.task("Clean:GeneratedJS", function(cb)
{
    del("./generated/**/*.js", cb);
});

gulp.task("Clean:GeneratedFonts", function(cb)
{
    del("./generated/fonts", cb);
});

gulp.task("Clean:PrecompiledJS", function(cb)
{
    del("./generated/precompiled.js", cb);
});

gulp.task("Clean:PrecompiledCSS", function(cb)
{
    del("./generated/precompiled.css", cb);
});

gulp.task("Clean:Precompiled", ["Clean:PrecompiledJS", "Clean:PrecompiledCSS"]);

gulp.task("Clean:Generated", function(cb)
{
    del("./generated", cb);
});

gulp.task("Clean:JSBuild", function(cb)
{
    del(["./build.js", "./build.min.js"], cb);
});

gulp.task("Clean:CSSBuild", function(cb)
{
    del(["./build.css", "./build.min.css"], cb);
});

gulp.task("Clean:Manifest", function(cb)
{
    del(["./app.manifest"], cb);
});

gulp.task("Clean:All", [
    "Clean:Generated",
    "Clean:JSBuild",
    "Clean:CSSBuild",
    "Clean:Manifest"
]);

gulp.task("Clean", ["Clean:All"]);
