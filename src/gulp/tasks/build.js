var gulp        = require("gulp"),
    path        = require("path"),

    names       = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names,
    runSequence = require("run-sequence");

gulp.task(
    names.buildIncrement,
    function doBuildIncrement(cb)
    {
        "use strict";

        runSequence(
            [
                names._static,
                names.scripts,
                names.styles
            ],
            names.manifest,
            cb
        );
    }
);

gulp.task(
    names.buildFresh,
    function doBuildFresh(cb)
    {
        "use strict";

        runSequence(
            names.clean,
            names.precompile,
            names.buildIncrement,
            cb
        );
    }
);

gulp.task(
    names.build,
    function doBuild(cb)
    {
        "use strict";

        runSequence(
            names.buildIncrement,
            cb
        );
    }
);

gulp.task(
    names.init,
    function doInit(cb)
    {
        "use strict";

        runSequence(
            names.bowerInstall,
            names.buildFresh,
            cb
        );
    }
);
