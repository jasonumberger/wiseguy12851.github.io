"use strict";

var gulp = require("gulp");
var stylePipes = require("../pipes/styles");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

gulp.task(
    names.prepCss, function()
    {
        return stylePipes.css();
    });

gulp.task(
    names.prepStylus, function()
    {
        return stylePipes.stylus();
    });

gulp.task(
    names.prepStylesFinalize, function()
    {
        return stylePipes.process();
    });

gulp.task(
    names.prepStyles, function(cb)
    {
        runSequence([
                        names.prepCss,
                        names.prepStylus
                    ],
                    names.prepStylesFinalize,
                    cb);
    });
