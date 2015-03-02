var gulp  = require("gulp"),
    runSequence = require("run-sequence"),
    path = require("path"),

    names = require(path.resolve("project", "config")).gulp.names;

gulp.task("default", function doDefault(cb)
{
    "use strict";

    runSequence(
        names.build,
        cb);
});
