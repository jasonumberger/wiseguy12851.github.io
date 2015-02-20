"use strict";

var gulp = require("gulp");
var scriptPipes = require("../pipes/scripts");
var names = require("../../../project/config").gulp.names;

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
