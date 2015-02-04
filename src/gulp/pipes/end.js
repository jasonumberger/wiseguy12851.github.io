"use strict";

var lazypipe = require('lazypipe');
var notify = require("gulp-notify");
var msg = require("../../../project/config").gulp.msg;
var log = require("../logic/log");

module.exports = lazypipe()
    .pipe(notify, msg.pipeEnd)
    .pipe(log.info,  msg.pipeEnd);
