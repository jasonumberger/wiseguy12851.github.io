"use strict";

// Note: These are defaults and may be overidden via an rc file. Always use
// the project config file to access these, never directly.
module.exports =
{
    cleanAll: "clean",
    cleanAllPrecompiled: "clean:precompiled",

    cleanFonts: "clean:fonts",
    cleanMedia: "clean:media",
    cleanPartials: "clean:partials",

    cleanScriptsJS: "clean:scripts:js",
    cleanScriptsTS: "clean:scripts:ts",
    cleanScriptsCoffee: "clean:scripts:coffee",
    cleanScriptsConcat: "clean:scripts:concat",
    cleanScriptsMinified: "clean:scripts:minified",
    cleanScriptsPrecompile: "clean:scripts:precompiled",
    cleanAllScripts: "clean:scripts",

    cleanStylesCSS: "clean:styles:css",
    cleanStylesLess: "clean:styles:less",
    cleanStylesStylus: "clean:styles:stylus",
    cleanStylesConcat: "clean:styles:concat",
    cleanStylesMinified: "clean:styles:minified",
    cleanStylesPrecompile: "clean:styles:precompiled",
    cleanAllStyles: "clean:styles",

    cleanManifest: "clean:scripts:concat",

    build: "build",

    manifestAlone: "build:manifest:alone",

    liveReloadFull: "livereload:full",

    precompileScripts: "precompile:scripts",
    precompileStyles: "precompile:styles",
    precompileFonts: "precompile:fonts",
    precompileAll: "precompile:all"
};
