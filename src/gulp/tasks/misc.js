var gulp = require("gulp"),
    runSequence = require("run-sequence"),
    path = require("path"),

    miscPipes = require(path.resolve("src", "gulp", "pipes", "misc")),
    names = require(path.resolve("project", "config")).gulp.names;

gulp.task(names.bowerInstall, function doBowerInstall()
{
    "use strict";

    return miscPipes.bowerInstall();
});

gulp.task(names.bowerUpdate, function doBowerUpdate()
{
    "use strict";

    return miscPipes.bowerUpdate();
});

gulp.task(names.bower, function doBower(cb)
{
    "use strict";

    runSequence(names.bowerUpdate, cb);
});
