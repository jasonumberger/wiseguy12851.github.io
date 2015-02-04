"use strict";

var gulp = require("gulp");
var livereload = require("../logic/livereload");
var runSequence = require('run-sequence');
var names = require("../../../project/config").gulp.names;

gulp.task("default", function(cb)
{
    runSequence(names.build,
                names.liveReloadFull,
                cb);
});
