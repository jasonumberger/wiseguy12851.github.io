"use strict";

var gulp = require("gulp");
var scriptPipes = require("../pipes/scripts");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

gulp.task(
    names.prepJS, function()
    {
        return scriptPipes.javascript();
    });

gulp.task(
    names.prepTS, function()
    {
        return scriptPipes.typescript();
    });

gulp.task(
    names.prepScriptsFinalize, function()
    {
        return scriptPipes.process();
    });

gulp.task(
    names.prepScripts, function(cb)
    {
        runSequence([
            names.prepJS,
            names.prepTS
        ],
        names.prepScriptsFinalize,
        cb);
    });
