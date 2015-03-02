var gulp = require("gulp"),
    lazypipe = require("lazypipe"),
    path = require("path"),

    ts = require("gulp-typescript"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),

    livereloadPipes = require(path.resolve("src", "gulp", "pipes",
        "livereload")),

    browserify = require("browserify"),
    _ = require("lodash"),
    source = require("vinyl-source-stream"),
    cache = require("gulp-cached"),
    changed = require("gulp-changed"),
    coffee = require("gulp-coffee"),
    gutil = require("gulp-util"),
    newer = require("gulp-newer"),

    src = require(path.resolve("project", "config")).gulp.paths.src,
    dest = require(path.resolve("project", "config")).gulp.paths.dest,
    prep = require(path.resolve("project", "config")).gulp.paths.prep;

exports.javascript =
    lazypipe()
        .pipe(gulp.src, src.javascript)
        .pipe(cache, "scripts-javascript", {optimizeMemory: true})
        .pipe(changed, dest.javascript)
        .pipe(newer, dest.javascript)
        .pipe(gulp.dest, dest.javascript)
        .pipe(livereloadPipes.normal);

exports.typescript =
    lazypipe()
        .pipe(gulp.src, src.typescript)
        .pipe(cache, "scripts-typescript", {optimizeMemory: true})
        .pipe(changed, dest.typescript, {extension: ".js"})
        .pipe(newer, {
            dest: dest.typescript,
            ext: ".js"
        })
        .pipe(function processTS()
        {
            "use strict";

            return ts({
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
                }).js;
        })
        .pipe(gulp.dest, dest.typescript)
        .pipe(livereloadPipes.normal);

exports.coffeescript =
    lazypipe()
        .pipe(gulp.src, src.coffeescript)
        .pipe(cache, "scripts-coffeescript", {optimizeMemory: true})
        .pipe(changed, dest.coffeescript, {extension: ".js"})
        .pipe(newer, {
            dest: dest.coffeescript,
            ext:  ".js"
        })
        .pipe(function processCoffee()
        {
            "use strict";

            return coffee({
                    bare: false
                }).on("error", gutil.log);
        })
        .pipe(gulp.dest, dest.typescript)
        .pipe(livereloadPipes.normal);

exports.browserify =
    lazypipe()
        .pipe(gulp.src, [
            path.resolve(dest.javascript, "**", "*.js"),
            path.resolve(dest.typescript, "**", "*.ts"),
            path.resolve(dest.coffeescript, "**", "*.coffee")
        ])
        .pipe(newer, path.resolve(dest.client, prep.scriptsBrowserify))
        .pipe(function doBrowserify()
        {
            "use strict";

            // Using entry point now for better organization
            // Takes possibly different entry points for each language
            // and strips entry points that have the exact same path
            var files = [
                require("path").resolve(dest.javascript, "index.js"),
                require("path").resolve(dest.typescript, "index.js"),
                require("path").resolve(dest.coffeescript, "index.js")
            ];

            files = _.uniq(files);

            // Then return a useable stream from the bundling
            return browserify(files)
                .bundle()
                .pipe(source(prep.scriptsBrowserify));
        })
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);

exports.concat =
    lazypipe()
        .pipe(gulp.src, [
            path.resolve(dest.client, prep.scriptsPrecompile),
            path.resolve(dest.client, prep.scriptsBrowserify)
        ])
        .pipe(newer, path.resolve(dest.client, prep.scriptsConcat))
        .pipe(concat, prep.scriptsConcat)
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);

exports.concatMinify =
    exports.concat
        .pipe(newer, path.resolve(dest.client, prep.scriptsMinified))
        .pipe(rename, prep.scriptsMinified)
        .pipe(uglify)
        .pipe(gulp.dest, dest.client)
        .pipe(livereloadPipes.normal);
