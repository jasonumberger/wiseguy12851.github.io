"use strict";

var gulp = require("gulp");
var del = require("del");

// Erase the build folder, this erases everything that gulp ever processed or touched
// resulting in a complete revert of anything gulp might have done

gulp.task("Clean:GeneratedCSS", function(cb)
{
    del("./src/generated/**/*.css", cb);
});

gulp.task("Clean:GeneratedJS", function(cb)
{
    del("./src/generated/**/*.js", cb);
});

gulp.task("Clean:GeneratedFonts", function(cb)
{
    del("./src/generated/fonts", cb);
});

gulp.task("Clean:PrecompiledJS", function(cb)
{
    del("./src/generated/precompiled.js", cb);
});

gulp.task("Clean:PrecompiledCSS", function(cb)
{
    del("./src/generated/precompiled.css", cb);
});

gulp.task("Clean:Precompiled", ["Clean:PrecompiledJS", "Clean:PrecompiledCSS"]);

gulp.task("Clean:Generated", function(cb)
{
    del("./src/generated", cb);
});

gulp.task("Clean:JSBuild", function(cb)
{
    del(["./src/build.js", "./build.min.js"], cb);
});

gulp.task("Clean:CSSBuild", function(cb)
{
    del(["./src/build.css", "./build.min.css"], cb);
});

gulp.task("Clean:Manifest", function(cb)
{
    del(["./src/app.manifest"], cb);
});

gulp.task("Clean:All", [
    "Clean:Generated",
    "Clean:JSBuild",
    "Clean:CSSBuild",
    "Clean:Manifest"
]);

gulp.task("Clean", ["Clean:All"]);
