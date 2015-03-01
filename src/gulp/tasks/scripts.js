var gulp = require("gulp"),
    path = require("path"),

    scriptPipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "scripts"
        )
    ),
    names = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names,
    runSequence = require("run-sequence");

gulp.task(
    names.scriptsJS,
    function doScriptsJS()
    {
        "use strict";

        return scriptPipes.javascript();
    }
);

gulp.task(
    names.scriptsTS,
    function doScriptsTS()
    {
        "use strict";

        return scriptPipes.typescript();
    }
);

gulp.task(
    names.scriptsCoffee,
    function doScriptsCoffee()
    {
        "use strict";

        return scriptPipes.coffeescript();
    }
);

gulp.task(
    names.scriptsBrowserify,
    function doScriptsBrowserify()
    {
        "use strict";

        return scriptPipes.browserify();
    }
);

gulp.task(
    names.scriptsConcat,
    function doScriptsConcat()
    {
        "use strict";

        return scriptPipes.concat();
    }
);

gulp.task(
    names.scriptsMinify,
    function doScriptsMinify()
    {
        "use strict";

        return scriptPipes.concatMinify();
    }
);

gulp.task(
    names.scripts,
    function doScripts(cb)
    {
        "use strict";

        runSequence(
            [
                names.scriptsJS,
                names.scriptsTS,
                names.scriptsCoffee
            ],
            names.scriptsBrowserify,
            names.scriptsMinify,
            cb
        );
    }
);
