var gulp        = require("gulp"),
    path        = require("path"),

    names       = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names,

    src = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.src;

gulp.task(
    names.watch,
    function doWatch()
    {
        "use strict";

        gulp.watch(
            src.gulp,
            [names.gulp]
        );

        gulp.watch(
            src.client,
            [names.staticClient]
        );

        gulp.watch(
            src.fonts,
            [names.precompileFonts]
        );

        gulp.watch(
            src.media,
            [names.staticMedia]
        );

        gulp.watch(
            src.partials,
            [names.staticPartials]
        );

        gulp.watch(
            [
                src.javascript,
                src.typescript,
                src.coffeescript
            ]
            [names.scripts]
        );

        gulp.watch(
            [
                src.css,
                src.less,
                src.stylus
            ]
                [names.styles]
        );
    }
);
