"use strict";

var gulp = require("gulp");
var livereload = require("../wrapper/livereload");
var runSequence = require('run-sequence');
var names = require("../../../project/config").gulp.names;

gulp.task("default", function(cb)
{
    runSequence(names.build,
                cb);
});
