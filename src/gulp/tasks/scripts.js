"use strict";

var gulp = require("gulp");
var scriptPipes = require("../pipes/scripts");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

gulp.task(
    names.scriptsJS, function()
    {
        return scriptPipes.javascript();
    });

gulp.task(
    names.scriptsTS, function()
    {
        return scriptPipes.typescript();
    });

gulp.task(
    names.scriptsConcat, function()
    {
        return scriptPipes.concat();
    });

gulp.task(
    names.scriptsMinify, function()
    {
        return scriptPipes.minify();
    });

gulp.task(
    names.scripts, function(cb)
    {
        runSequence([
            names.scriptsJS,
            names.scriptsTS
        ],
        names.scriptsMinify,
        cb);
    });
