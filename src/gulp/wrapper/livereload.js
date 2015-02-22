"use strict";

var livereload = require("gulp-livereload");
var src = require("../../../project/config").gulp.paths.src;

livereload.options.reloadPage = src.initPageDev;

module.exports = livereload;
