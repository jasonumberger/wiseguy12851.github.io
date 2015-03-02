var gulp        = require("gulp"),
    path        = require("path"),

    argPipes   = require(path.resolve("src", "gulp", "pipes", "args")),
    names       = require(path.resolve("project", "config")).gulp.names;

gulp.task(names.gitCommitPush, function doGulpCommitPush()
{
    "use strict";

    return argPipes.gitCommitPush();
});
