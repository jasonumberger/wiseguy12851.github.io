var log = require('pretty-log');
var _ = require("lodash");
var logConfig = require("../../../project/config").gulp.log;

exports.error = function(msg)
{
    if(_.indexOf(logConfig.enabledLogLevels, "error") >= 0) log.error(msg);
};

exports.warn = function(msg)
{
    if(_.indexOf(logConfig.enabledLogLevels, "warn") >= 0) log.warn(msg);
};

exports.success = function(msg)
{
    if(_.indexOf(logConfig.enabledLogLevels, "success") >= 0) log.success(msg);
};

exports.debug = function(msg)
{
    if(_.indexOf(logConfig.enabledLogLevels, "debug") >= 0) log.debug(msg);
};
