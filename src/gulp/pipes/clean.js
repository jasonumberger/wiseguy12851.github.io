var lazypipe    = require("lazypipe"),
    del         = require("del"),
    path        = require("path"),

    dest        = require(path.resolve("project", "config")).gulp.paths.dest,
    prep        = require(path.resolve("project", "config")).gulp.paths.prep,

    makeDelPipe = function doMakeDelPipe(_path)
    {
        "use strict";

        return lazypipe()
            .pipe(function doDel()
            {
                del(_path);
            });
    };

/*
 * Basics
 */
exports.root = makeDelPipe(dest.root);
exports.client = makeDelPipe(dest.client);

exports.fonts = makeDelPipe(dest.fonts);
exports.media = makeDelPipe(dest.media);
exports.partials = makeDelPipe(dest.partials);
exports.manifest = makeDelPipe(path.resolve(dest.client, prep.manifest));

/*
 * Scripts
 */
exports.scriptsJS = makeDelPipe(path.resolve(dest.javascript, "**", "*.js"));
exports.scriptsTS = makeDelPipe(path.resolve(dest.typescript, "**", "*.ts"));
exports.scriptsCoffee =
    makeDelPipe(path.resolve(dest.coffeescript, "**", "*.coffee"));

exports.scriptsBrowserify =
    makeDelPipe(path.resolve(dest.client, prep.scriptsBrowserify));

exports.scriptsConcat =
    makeDelPipe(path.resolve(dest.client, prep.scriptsConcat));

exports.scriptsMinified =
    makeDelPipe(path.resolve(dest.client, prep.scriptsMinified));

exports.scriptsPrecompile =
    makeDelPipe(path.resolve(dest.client, prep.scriptsPrecompile));

/*
 * Styles
 */

exports.stylesCSS = makeDelPipe(path.resolve(dest.css, "**", "*.css"));
exports.stylesLess = makeDelPipe(path.resolve(dest.less, "**", "*.less"));
exports.stylesStylus = makeDelPipe(path.resolve(dest.stylus, "**", "*.styl"));

exports.stylesConcat =
    makeDelPipe(path.resolve(dest.client, prep.stylesConcat));

exports.stylesMinified =
    makeDelPipe(path.resolve(dest.client, prep.stylesMinified));

exports.stylesPrecompile =
    makeDelPipe(path.resolve(dest.client, prep.stylesPrecompile));

/*
 * Archive
 */

exports.archiveZip = makeDelPipe(path.resolve(dest.root, prep.archiveZip));
exports.archiveGzip = makeDelPipe(path.resolve(dest.root, prep.archiveTar));
