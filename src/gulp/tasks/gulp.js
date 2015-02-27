var gulp        = require("gulp"),
    path        = require("path"),

    gulpPipes   = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "gulp"
        )
    ),

    names       = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names,
    runSequence = require("run-sequence");

gulp.task(
    names.gulpEslint,
    function doGulpEslint()
    {
        "use strict";

        return gulpPipes.eslint();
    }
);

gulp.task(
    names.gulpLint,
    function doGulpLint(cb)
    {
        "use strict";

        runSequence(
            [
                names.gulpEslint
            ],
            cb
        );
    }
);

gulp.task(
    names.gulp,
    function doGulp(cb)
    {
        "use strict";

        runSequence(
            [
                names.gulpLint
            ],
            cb
        );
    }
);
