"use strict";

var lazypipe = require('lazypipe');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var gulpif = require("gulp-if");
var log = require("../wrapper/log");
var cache = require("../wrapper/cache");

var msg = require("../../../project/config").gulp.msg;

var firstRun = lazypipe()
    .pipe(function()
     {
         cache["start"] = true;
     });
    //.pipe(plumber)
    //.pipe(notify, msg.pipeStart)
    //.pipe(log.info,  msg.pipeStart);

module.exports = lazypipe()
    .pipe(function()
    {
        // Disabled until replacement found
        // Seems this is abandoned
        return gulpif(!cache["start"], firstRun());
    });
