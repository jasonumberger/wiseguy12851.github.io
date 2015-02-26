"use strict";

var lazypipe = require('lazypipe');
var del = require("del");
var log = require("../wrapper/log");

var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

function makeDelPipe(path)
{
    return lazypipe().pipe(
        function()
        {
            del(path);
        }
    );
}

exports.root = makeDelPipe(dest.root);
exports.client = makeDelPipe(dest.client);

exports.fonts = makeDelPipe(dest.fonts);
exports.media = makeDelPipe(dest.media);
exports.partials = makeDelPipe(dest.partials);

exports.scriptsJS = makeDelPipe(dest.javascript + "/**/*.js");
exports.scriptsTS = makeDelPipe(dest.typescript + "/**/*.ts");
exports.scriptsCoffee = makeDelPipe(dest.coffeescript + "/**/*.coffee");

exports.scriptsBrowserify =
makeDelPipe(dest.client + "/" + prep.scriptsBrowserify);
exports.scriptsConcat = makeDelPipe(dest.client + "/" + prep.scriptsConcat);
exports.scriptsMinified =
makeDelPipe(dest.client + "/" + prep.scriptsMinified);
exports.scriptsPrecompile =
makeDelPipe(dest.client + "/" + prep.scriptsPrecompile);

exports.stylesCSS = makeDelPipe(dest.css + "/**/*.css");
exports.stylesLess = makeDelPipe(dest.less + "/**/*.less");
exports.stylesStylus = makeDelPipe(dest.stylus + "/**/*.styl");

exports.stylesConcat = makeDelPipe(dest.client + "/" + prep.stylesConcat);
exports.stylesMinified = makeDelPipe(dest.client + "/" + prep.stylesMinified);
exports.stylesPrecompile =
makeDelPipe(dest.client + "/" + prep.stylesPrecompile);

exports.manifest = makeDelPipe(dest.client + "/" + prep.manifest);
