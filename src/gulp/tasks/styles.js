var gulp = require("gulp"),
    path = require("path"),

    stylePipes = require(path.resolve("src", "gulp", "pipes", "styles")),
    names = require(path.resolve("project", "config")).gulp.names,
    runSequence = require("run-sequence");

gulp.task(names.stylesCSS, function doStylesCSS()
{
    "use strict";

    return stylePipes.css();
});

gulp.task(names.stylesLess, function doStylesCSS()
{
    "use strict";

    return stylePipes.less();
});

gulp.task(names.stylesStylus, function doStylesStylus()
{
    "use strict";

    return stylePipes.stylus();
});

gulp.task(names.stylesConcat, function doStylesConcat()
{
    "use strict";

    return stylePipes.concat();
});

gulp.task(names.stylesMinify, function doStylesMinify()
{
    "use strict";

    return stylePipes.concatMinify();
});

gulp.task(names.styles, function doStyles(cb)
{
    "use strict";

    runSequence([
        names.stylesCSS,
        names.stylesLess,
        names.stylesStylus
    ],
        names.stylesMinify,
        cb);
});
