"use strict";

var gulp = require("gulp");
var lazypipe = require('lazypipe');
var bower = require('gulp-bower');

exports.bowerInstall = lazypipe()
    .pipe(bower, {cmd: "install"});

exports.bowerUpdate = lazypipe()
    .pipe(bower, {cmd: "update"});
