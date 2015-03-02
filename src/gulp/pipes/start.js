var lazypipe = require("lazypipe"),
    // plumber = require("gulp-plumber"),
    // notify = require("gulp-notify"),
    gulpif   = require("gulp-if"),
    // log = require("../wrapper/log"),
    path     = require("path"),
    cache    = require(path.require("wrapper", "cache")),
    // msg = require("../../../project/config").gulp.msg;

    firstRun =
        lazypipe()
            .pipe(function doFirstRun()
            {
                "use strict";

                cache.start = true;
            });
        // .pipe(plumber)
        // .pipe(notify, msg.pipeStart)
        // .pipe(log.info,  msg.pipeStart);

module.exports =
    lazypipe()
        .pipe(function doStart()
        {
            "use strict";

            // Disabled until replacement found
            // Seems this is abandoned
            return gulpif(!cache.start, firstRun());
        });
