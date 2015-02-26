"use strict";

var gulp = require("gulp");
var names = require("../../../project/config").gulp.names;
var runSequence = require('run-sequence');

gulp.task(
    names.buildIncrement,
    function(cb)
    {
        runSequence(
            [
                names._static,
                names.scripts,
                names.styles
            ],
            names.manifest,
            cb
        );
    }
);

gulp.task(
    names.buildFresh,
    function(cb)
    {
        runSequence(
            names.clean,
            names.precompile,
            names.buildIncrement,
            cb
        );
    }
);

gulp.task(
    names.build,
    function(cb)
    {
        runSequence(
            names.buildIncrement,
            cb
        );
    }
);

gulp.task(
    names.init,
    function(cb)
    {
        runSequence(
            names.bowerInstall,
            names.buildFresh,
            cb
        );
    }
);
