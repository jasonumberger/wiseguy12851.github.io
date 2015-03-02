var gulp = require("gulp"),
    runSequence = require("run-sequence"),
    path = require("path"),

    names = require(path.resolve("project", "config")).gulp.names,
    cleanPipes = require(path.resolve("src", "gulp", "pipes", "clean"));

// Erase the build folder, this erases everything that gulp ever processed or
// touched resulting in a complete revert of anything gulp might have done

gulp.task(names.cleanClient, function doClientClean()
{
    "use strict";

    return cleanPipes.client();
});

gulp.task(names.cleanRoot, function doCleanRoot()
{
    "use strict";

    return cleanPipes.root();
});

gulp.task(names.cleanPrecompiled, function doCleanPrecompiled(cb)
{
    "use strict";

    runSequence([
        names.cleanScriptsPrecompile,
        names.cleanStylesPrecompile,
        names.cleanFonts
    ], cb);
});

gulp.task(names.cleanFonts, function doCleanFonts()
{
    "use strict";

    return cleanPipes.fonts();
});

gulp.task(names.cleanMedia, function doCleanMedia()
{
    "use strict";

    return cleanPipes.media();
});

gulp.task(names.cleanPartials, function doCleanPartials()
{
    "use strict";

    return cleanPipes.partials();
});

gulp.task(names.cleanScriptsJS, function doCleanScriptsJS()
{
    "use strict";

    return cleanPipes.scriptsJS();
});

gulp.task(names.cleanScriptsTS, function doCleanScriptsTS()
{
    "use strict";

    return cleanPipes.scriptsTS();
});

gulp.task(names.cleanScriptsCoffee, function doCleanScriptsCoffee()
{
    "use strict";

    return cleanPipes.scriptsCoffee();
});

gulp.task(names.cleanScriptsBrowserify, function doCleanScriptsBrowserify()
{
    "use strict";

    return cleanPipes.scriptsBrowserify();
});

gulp.task(names.cleanScriptsConcat, function doCleanScriptsConcat()
{
    "use strict";

    return cleanPipes.scriptsConcat();
});

gulp.task(names.cleanScriptsMinified, function doCleanScriptsMinified()
{
    "use strict";

    return cleanPipes.scriptsMinified();
});

gulp.task(names.cleanScriptsPrecompile, function doCleanScriptsPrecompile()
{
    "use strict";

    return cleanPipes.scriptsPrecompile();
});

gulp.task(names.cleanScripts, function doCleanScripts(cb)
{
    "use strict";

    runSequence([
        names.cleanScriptsJS,
        names.cleanScriptsTS,
        names.cleanScriptsCoffee,
        names.cleanScriptsBrowserify,
        names.cleanScriptsConcat,
        names.cleanScriptsMinified,
        names.cleanScriptsPrecompile
    ], cb);
});

gulp.task(names.cleanStylesCSS, function doCleanStylessCSS()
{
    "use strict";

    return cleanPipes.stylesCSS();
});

gulp.task(names.cleanStylesLess, function doCleanStylesLess()
{
    "use strict";

    return cleanPipes.stylesLess();
});

gulp.task(names.cleanStylesStylus, function doCleanStylesStylus()
{
    "use strict";

    return cleanPipes.stylesStylus();
});

gulp.task(names.cleanStylesConcat, function doCleanStylesConcat()
{
    "use strict";

    return cleanPipes.stylesConcat();
});

gulp.task(names.cleanStylesMinified, function doCleanStylesMinified()
{
    "use strict";

    return cleanPipes.stylesMinified();
});

gulp.task(names.cleanStylesPrecompile, function doCleanStylesPrecompile()
{
    "use strict";

    return cleanPipes.stylesPrecompile();
});

gulp.task(names.cleanStyles, function doCleanStyles(cb)
{
    "use strict";

    runSequence([
        names.cleanStylesCSS,
        names.cleanStylesLess,
        names.cleanStylesStylus,
        names.cleanStylesConcat,
        names.cleanStylesMinified,
        names.cleanStylesPrecompile
    ], cb);
});

gulp.task(names.cleanManifest, function doCleanManifest()
{
    "use strict";

    return cleanPipes.manifest();
});

gulp.task(names.cleanArchiveZip, function doCleanManifest()
{
    "use strict";

    return cleanPipes.archiveZip();
});

gulp.task(names.cleanArchiveGzip, function doCleanManifest()
{
    "use strict";

    return cleanPipes.archiveGzip();
});

gulp.task(names.cleanArchive, function doClean(cb)
{
    "use strict";

    runSequence([
        names.cleanArchiveZip,
        names.cleanArchiveGzip
    ], cb);
});

gulp.task(names.clean, function doClean(cb)
{
    "use strict";

    runSequence([
        names.cleanRoot
    ], cb);
});
