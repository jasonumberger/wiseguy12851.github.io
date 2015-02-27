var gulp = require("gulp"),
    path = require("path"),

    liveReloadPipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "livereload"
        )
    ),
    names = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names;

gulp.task(
    names.liveReload,
    function doLiveReload()
    {
        "use strict";

        return liveReloadPipes.full();
    }
);
