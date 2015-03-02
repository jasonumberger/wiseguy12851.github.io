var gulp  = require("gulp"),
    path = require("path"),

    names = require(path.resolve("project", "config")).gulp.names,
    src   = require(path.resolve("project", "config")).gulp.paths.src;

gulp.task(names.watch, function doWatch()
    {
        "use strict";

        gulp.watch(src.gulp, [names.gulp]);
        gulp.watch(src.client, [names.staticClient]);
        gulp.watch(src.fonts, [names.precompileFonts]);
        gulp.watch(src.media, [names.staticMedia]);
        gulp.watch(src.partials, [names.staticPartials]);

        // Building is complex and requires a series of carefully laid
        // out steps, other speed improvements are integrated into this
        // So just run a normal incremental build. Its too complex to be
        // done directly from gulp.watch
        gulp.watch([
            src.javascript,
            src.typescript,
            src.coffeescript,
            src.css,
            src.less,
            src.stylus
        ],
            [names.build]);
    });
