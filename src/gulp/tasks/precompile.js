"use strict";

var gulp = require("gulp");
var precompilePipes = require("../pipes/precompile");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

// Now get all the scripts then concatenate and minify them
gulp.task(
    names.precompileScripts, function()
    {
        return precompilePipes.scripts();
    });

gulp.task(
    names.precompileStyles, function()
    {
        return precompilePipes.styles();
    });

gulp.task(
    names.precompileFonts, function()
    {
        return precompilePipes.fonts();
    });

gulp.task(
    names.precompileAll, function(cb)
    {
        runSequence([names.precompileScripts,
                    names.precompileStyles,
                    names.precompileFonts],
                    cb);
    });
