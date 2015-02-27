var gulp = require("gulp"),
    path = require("path"),

    manifestPipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "manifest"
        )
    ),
    names = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names;

gulp.task(
    names.manifest,
    function doManifest()
    {
        "use strict";

        return manifestPipes.regular();
    }
);
