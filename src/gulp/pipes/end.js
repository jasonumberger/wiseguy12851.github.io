"use strict";

var lazypipe = require('lazypipe');
var notify = require("gulp-notify");
var log = require("../wrapper/log");

var msg = require("../../../project/config").gulp.msg;

module.exports = lazypipe()
    .pipe(notify, msg.pipeEnd)
    .pipe(log.info,  msg.pipeEnd);
