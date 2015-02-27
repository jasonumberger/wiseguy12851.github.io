var gulp = require("gulp"),
    runSequence = require("run-sequence"),
    path = require("path"),

    staticPipes = require(
        path.resolve(
            "src",
            "gulp",
            "pipes",
            "static"
        )
    ),

    names = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.names;

gulp.task(
    names.staticClient,
    function doStaticClient()
    {
        "use strict";

        return staticPipes.client();
    }
);

gulp.task(
    names.staticMedia,
    function doStaticMedia()
    {
        "use strict";

        return staticPipes.media();
    }
);

gulp.task(
    names.staticPartials,
    function doStaticPartials()
    {
        "use strict";

        return staticPipes.partials();
    }
);

gulp.task(
    names.staticTS,
    function doStaticTS()
    {
        "use strict";

        return staticPipes.typescript();
    }
);

gulp.task(
    names.staticCoffeescript,
    function doStaticCoffeescript()
    {
        "use strict";

        return staticPipes.coffeescript();
    }
);

gulp.task(
    names.staticLess,
    function doStaticLess()
    {
        "use strict";

        return staticPipes.less();
    }
);

gulp.task(
    names.staticStylus,
    function doStaticStylus()
    {
        "use strict";

        return staticPipes.stylus();
    }
);

gulp.task(
    names._static,
    function doStatic(cb)
    {
        "use strict";

        runSequence(
            [
                names.staticClient,
                names.staticMedia,
                names.staticPartials,
                names.staticTS,
                names.staticCoffeescript,
                names.staticLess,
                names.staticStylus
            ],
            cb
        );
    }
);
