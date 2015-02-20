"use strict";

var gulp = require("gulp");
var stylePipes = require("../pipes/styles");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

gulp.task(
    names.stylesCSS, function()
    {
        return stylePipes.css();
    });

gulp.task(
    names.stylesStylus, function()
    {
        return stylePipes.stylus();
    });

gulp.task(
    names.stylesConcat, function()
    {
        return stylePipes.concat();
    });

gulp.task(
    names.stylesMinify, function()
    {
        return stylePipes.concatMinify();
    });

gulp.task(
    names.styles, function(cb)
    {
        runSequence([
                        names.stylesCSS,
                        names.stylesStylus
                    ],
                    names.stylesMinify,
                    cb);
    });
