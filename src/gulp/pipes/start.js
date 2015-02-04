"use strict";

var lazypipe = require('lazypipe');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var log = require("../logic/log");

var msg = require("../../../project/config").gulp.msg;

module.exports = lazypipe()
    .pipe(plumber)
    .pipe(notify, msg.pipeStart)
    .pipe(log.info,  msg.pipeStart);
