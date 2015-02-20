"use strict";

// Note: These are defaults and may be overidden via an rc file. Always use
// the project config file to access these, never directly.
module.exports =
{
    cleanClient: "clean:client",
    cleanRoot: "clean:root",
    cleanPrecompiled: "clean:precompiled",

    cleanFonts: "clean:fonts",
    cleanMedia: "clean:media",
    cleanPartials: "clean:partials",

    cleanScriptsJS: "clean:scripts@js",
    cleanScriptsTS: "clean:scripts@ts",
    cleanScriptsCoffee: "clean:scripts@coffee",
    cleanScriptsConcat: "clean:scripts@concat",
    cleanScriptsMinified: "clean:scripts@minified",
    cleanScriptsPrecompile: "clean:scripts@precompiled",
    cleanScripts: "clean:scripts",

    cleanStylesCSS: "clean:styles@css",
    cleanStylesLess: "clean:styles@less",
    cleanStylesStylus: "clean:styles@stylus",
    cleanStylesConcat: "clean:styles@concat",
    cleanStylesMinified: "clean:styles@minified",
    cleanStylesPrecompile: "clean:styles@precompiled",
    cleanStyles: "clean:styles",

    cleanManifest: "clean:manifest",
    clean: "clean",

    liveReload: "livereload",
    manifest: "manifest",

    staticClient: "static:client",
    staticMedia: "static:media",
    staticPartials: "static:partials",
    _static: "static",

    precompileScripts: "precompile:scripts",
    precompileStyles: "precompile:styles",
    precompileFonts: "precompile:fonts",
    precompileAll: "precompile:all",
    precompile: "precompile",

    scriptsJS: "scripts:js",
    scriptsTS: "scripts:ts",
    scriptsConcat: "scripts:concat",
    scriptsMinify: "scripts:minify",
    scripts: "scripts",

    stylesCSS: "styles:css",
    stylesStylus: "styles:stylus",
    stylesConcat: "styles:concat",
    stylesMinify: "styles:minify",
    styles: "styles",

    buildIncrement: "build:increment",
    buildFresh: "build:fresh",
    build: "build"
};
