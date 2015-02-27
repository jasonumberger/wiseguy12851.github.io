var gulp            = require("gulp"),
    lazypipe        = require("lazypipe"),
    path            = require("path"),

    ts              = require("gulp-typescript"),
    concat          = require("gulp-concat"),
    uglify          = require("gulp-uglify"),
    rename          = require("gulp-rename"),
    livereloadPipes = require(path.resolve("src", "gulp", "pipes", "livereload")),
    browserify      = require("browserify"),
    _               = require("lodash"),
    source          = require("vinyl-source-stream"),
    eslint          = require("gulp-eslint"),
    cache           = require("gulp-cached"),
    changed         = require("gulp-changed"),

    src             = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.src,

    dest            = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.dest,

    prep            = require(
        path.resolve(
            "project",
            "config"
        )
    ).gulp.paths.prep;

exports.javascript = lazypipe()
    .pipe(
    gulp.src,
    src.javascript
)
    .pipe(
    cache,
    "scripts-javascript",
    {optimizeMemory: true}
)
    .pipe(changed, dest.javascript)

    .pipe(
    gulp.dest,
    dest.javascript
);

exports.javascriptLive = exports.javascript
    .pipe(livereloadPipes.normal);

exports.typescript = lazypipe()
    .pipe(
    gulp.src,
    src.typescript
)
    .pipe(
    cache,
    "scripts-typescript",
    {optimizeMemory: true}
)
    .pipe(changed, dest.typescript,
    {extension: ".js"})

    .pipe(
    function processTS()
    {
        "use strict";

        return ts(
            {
                // Try to keep it looking like
                // Javascript
                removeComments:    false,
                noImplicitAny:     false,
                noLib:             false,
                noEmitOnError:     true,
                target:            "ES5",
                module:            "commonjs",
                declarationFiles:  false,
                noExternalResolve: false
            }
        ).js;
    }
).pipe(
    gulp.dest,
    dest.typescript
);

exports.typescriptLive = exports.typescript
    .pipe(livereloadPipes.normal);

exports.eslint = lazypipe()
    .pipe(
    gulp.src,
    [
        // Remember, use the compiled output, .ts and .coffee will be .js
        // on compile
        path.resolve(
            dest.javascript,
            "**",
            "*.js"
        ),
        path.resolve(
            dest.typescript,
            "**",
            "*.js"
        ),
        path.resolve(
            dest.coffeescript,
            "**",
            "*.js"
        )
    ]
)
    .pipe(
    cache,
    "scripts-eslint",
    {optimizeMemory: true}
)
    .pipe(eslint)
    .pipe(eslint.format)
    .pipe(eslint.failOnError);

exports.eslintLive = exports.eslint
    .pipe(livereloadPipes.normal);

exports.browserify = lazypipe().pipe(
    function doBrowserify()
    {
        "use strict";

        // Using entry point now for better organization
        // Takes possibly different entry points for each language
        // and strips entry points that have the exact same path
        var files = [
            require("path").resolve(
                __dirname,
                "..",
                "..",
                "..",
                dest.javascript,
                "index.js"
            ),

            require("path").resolve(
                __dirname,
                "..",
                "..",
                "..",
                dest.typescript,
                "index.js"
            )
        ];
        files = _.uniq(files);

        // Then return a useable stream from the bundling
        return browserify(files)
            .bundle()
            .pipe(source(prep.scriptsBrowserify));
    }
).pipe(
    gulp.dest,
    dest.client
);

exports.browserifyLive = exports.browserify
    .pipe(livereloadPipes.normal);

exports.concat = lazypipe().pipe(
    gulp.src,
    [
        path.resolve(
            dest.client,
            prep.scriptsPrecompile
        ),
        path.resolve(
            dest.client,
            prep.scriptsBrowserify
        )
    ]
).pipe(
    concat,
    prep.scriptsConcat
).pipe(
    gulp.dest,
    dest.client
);

exports.concatLive = exports.concat
    .pipe(livereloadPipes.normal);

exports.concatMinify = exports.concat
    .pipe(
    rename,
    prep.scriptsMinified
).pipe(uglify).pipe(
    gulp.dest,
    dest.client
);

exports.concatMinifyLive = exports.concatLive
    .pipe(exports.concatMinify)
    .pipe(livereloadPipes.normal);
