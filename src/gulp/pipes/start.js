"use strict";

var lazypipe = require('lazypipe');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var gulpif = require("gulp-if");
var log = require("../logic/log");
var cache = require("../logic/cache");

var msg = require("../../../project/config").gulp.msg;

var firstRun = lazypipe()
    .pipe(function(cb)
     {
         cache.set("start", true);
         cb();
     })
    .pipe(plumber)
    .pipe(notify, msg.pipeStart)
    .pipe(log.info,  msg.pipeStart);

module.exports = lazypipe()
    .pipe(function()
    {
        return gulpif(!cache.get("start"), firstRun());
    });
