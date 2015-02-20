"use strict";

var lazypipe = require('lazypipe');
var del = require("../logic/delete");

var dest = require("../../../project/config").gulp.paths.dest;
var prep = require("../../../project/config").gulp.paths.prep;

function makeDelPipe(path)
{
    return lazypipe()
        .pipe(function()
              {
                  del(path);
              });
}

exports.root = makeDelPipe(dest.root);
exports.client = makeDelPipe(dest.client);

exports.fonts = makeDelPipe(dest.fonts);
exports.media = makeDelPipe(dest.media);
exports.partials = makeDelPipe(dest.partials);

exports.scriptsJS = makeDelPipe(dest.javascript + "/**/*.js");
exports.scriptsTS = makeDelPipe(dest.typescript + "/**/*.ts");
exports.scriptsCoffee = makeDelPipe(dest.coffeescript + "/**/*.coffee");

exports.scriptsConcat = makeDelPipe(dest.client + "/" + prep.scripts_concat);
exports.scriptsMinified = makeDelPipe(dest.client + "/" + prep.scripts_minified);
exports.scriptsPrecompile = makeDelPipe(dest.client + "/" + prep.scripts_precompile);

exports.stylesCSS = makeDelPipe(dest.css + "/**/*.css");
exports.stylesLess = makeDelPipe(dest.less + "/**/*.less");
exports.stylesStylus = makeDelPipe(dest.stylus + "/**/*.styl");

exports.stylesConcat = makeDelPipe(dest.client + "/" + prep.styles_concat);
exports.stylesMinified = makeDelPipe(dest.client + "/" + prep.styles_minified);
exports.stylesPrecompile = makeDelPipe(dest.client + "/" + prep.styles_precompile);

exports.manifest = makeDelPipe(dest.client + "/" + prep.manifest);
