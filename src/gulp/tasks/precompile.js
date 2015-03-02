var gulp = require("gulp"),
    path = require("path"),

    precompilePipes = require(path.resolve("src", "gulp", "pipes",
        "precompile")),

    names = require(path.resolve("project", "config")).gulp.names,
    runSequence = require("run-sequence");

// Now get all the scripts then concatenate and minify them
gulp.task(names.precompileScripts, function doPrecompileScripts()
{
    "use strict";

    return precompilePipes.scripts();
});

gulp.task(names.precompileStyles, function doPrecompileStyles()
{
    "use strict";

    return precompilePipes.styles();
});

gulp.task(names.precompileFonts, function doPrecompileFonts()
{
    "use strict";

    return precompilePipes.fonts();
});

gulp.task(names.precompileAll, function doPrecompileAll(cb)
{
    "use strict";

    runSequence([
        names.precompileScripts,
        names.precompileStyles,
        names.precompileFonts
    ], cb);
});

gulp.task(names.precompile, function doPrecompile(cb)
{
    "use strict";

    runSequence([
        names.precompileAll
    ], cb);
});
