var lazypipe    = require("lazypipe"),
    del         = require("del"),
    path        = require("path"),

    dest        = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.dest,
    prep        = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.prep,

    makeDelPipe = function makeDelPipe(_path)
    {
        "use strict";

        return lazypipe().pipe(
            function delFunc()
            {
                del(_path);
            }
        );
    };

exports.root = makeDelPipe(dest.root);
exports.client = makeDelPipe(dest.client);

exports.fonts = makeDelPipe(dest.fonts);
exports.media = makeDelPipe(dest.media);
exports.partials = makeDelPipe(dest.partials);

exports.scriptsJS =
makeDelPipe(
    path.resolve(
        dest.javascript,
        "**",
        "*.js"
    )
);
exports.scriptsTS =
makeDelPipe(
    path.resolve(
        dest.typescript,
        "**",
        "*.ts"
    )
);
exports.scriptsCoffee =
makeDelPipe(
    path.resolve(
        dest.coffeescript,
        "**",
        "*.coffee"
    )
);

exports.scriptsBrowserify =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.scriptsBrowserify
    )
);
exports.scriptsConcat =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.scriptsConcat
    )
);
exports.scriptsMinified =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.scriptsMinified
    )
);
exports.scriptsPrecompile =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.scriptsPrecompile
    )
);

exports.stylesCSS =
makeDelPipe(
    path.resolve(
        dest.css,
        "**",
        "*.css"
    )
);
exports.stylesLess =
makeDelPipe(
    path.resolve(
        dest.less,
        "**",
        "*.less"
    )
);
exports.stylesStylus =
makeDelPipe(
    path.resolve(
        dest.stylus,
        "**",
        "*.styl"
    )
);

exports.stylesConcat =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.stylesConcat
    )
);
exports.stylesMinified =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.stylesMinified
    )
);
exports.stylesPrecompile =
makeDelPipe(
    path.resolve(
        dest.client,
        prep.stylesPrecompile
    )
);

exports.manifest = makeDelPipe(
    path.resolve(
        dest.client,
        prep.manifest
    )
);

exports.archiveZip = makeDelPipe(
    path.resolve(
        dest.root,
        prep.archiveZip
    )
);

exports.archiveGzip = makeDelPipe(
    path.resolve(
        dest.root,
        prep.archiveTar
    )
);
