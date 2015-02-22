"use strict";

var Log = require("log");
var config = require("../../../project/config").gulp.log;

var inst = new Log(config.logLevel);

module.exports = inst;
