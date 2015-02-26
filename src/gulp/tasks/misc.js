"use strict";

var gulp = require("gulp");
var runSequence = require('run-sequence');
var miscPipes = require("../pipes/misc");
var names = require("../../../project/config").gulp.names;

gulp.task(
    names.bowerInstall,
    function()
    {
        return miscPipes.bowerInstall();
    }
);

gulp.task(
    names.bowerUpdate,
    function()
    {
        return miscPipes.bowerUpdate();
    }
);

gulp.task(
    names.bower,
    function(cb)
    {
        runSequence(
            names.bowerUpdate,
            cb
        );
    }
);
