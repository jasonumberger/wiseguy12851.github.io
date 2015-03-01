var gulp        = require("gulp"),
    path        = require("path"),

    archivePipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "archive"
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
    names.archiveZip,
    function doArchiveZip()
    {
        "use strict";

        return archivePipes.zip();
    }
);

gulp.task(
    names.archiveGzip,
    function doArchiveGzip()
    {
        "use strict";

        return archivePipes.gzip();
    }
);

gulp.task(
    names.archive,
    function doArchive(cb)
    {

        "use strict";

        runSequence(
            [
                names.archiveZip,
                names.archiveGzip
            ],
            cb
        );
    }
);
