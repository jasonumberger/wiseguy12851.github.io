var log = require("pretty-log"),
    _ = require("lodash"),
    path = require("path"),

    logConfig = require(path.resolve("project", "config")).gulp.log;

exports.error = function doError(msg)
{
    "use strict";

    if(_.indexOf(logConfig.enabledLogLevels, "error") >= 0)
    {
        log.error(msg);
    }
};

exports.warn = function doWarn(msg)
{
    "use strict";

    if(_.indexOf(logConfig.enabledLogLevels, "warn") >= 0)
    {
        log.warn(msg);
    }
};

exports.success = function doSuccess(msg)
{
    "use strict";

    if(_.indexOf(logConfig.enabledLogLevels, "success") >= 0)
    {
        log.success(msg);
    }
};

exports.debug = function doDebug(msg)
{
    "use strict";

    if(_.indexOf(logConfig.enabledLogLevels, "debug") >= 0)
    {
        log.debug(msg);
    }
};
