"use strict";

var gulp = require("gulp");
var liveReloadPipes = require("../pipes/livereload");
var names = require("../../../project/config").gulp.names;

gulp.task(names.liveReloadFull, function()
{
    return liveReloadPipes.full();
});