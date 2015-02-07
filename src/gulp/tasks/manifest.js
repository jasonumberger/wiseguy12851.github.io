"use strict";

var gulp = require("gulp");
var manifestPipes = require("../pipes/manifest");
var names = require("../../../project/config").gulp.names;

gulp.task(names.manifestAlone, function()
{
    return manifestPipes();
});
