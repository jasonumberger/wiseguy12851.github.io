"use strict";

var gulp = require("gulp");
var gulpPipes = require("../pipes/gulp");
var names = require("../../../project/config").gulp.names;

var runSequence = require('run-sequence');

gulp.task(
    names.gulpEslint,
    function()
    {
        return gulpPipes.eslint();
    }
);

gulp.task(
    names.gulpLint,
    function(cb)
    {
        runSequence(
            [
                names.gulpEslint
            ],
            cb
        );
    }
);

gulp.task(
    names.gulp,
    function(cb)
    {
        runSequence(
            [
                names.gulpLint
            ],
            cb
        );
    }
);
