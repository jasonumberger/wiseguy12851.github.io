/*
 * These are program output messages
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = {
    watch:        "watch",

    bowerUpdate:  "bower:update",
    bowerInstall: "bower:install",
    bower:        "bower",

    gulpEslint: "gulp:lint@eslint",
    gulpLint:   "gulp:lint",
    gulp:       "gulp",

    cleanClient:      "clean:client",
    cleanRoot:        "clean:root",
    cleanPrecompiled: "clean:precompiled",

    cleanFonts:    "clean:fonts",
    cleanMedia:    "clean:media",
    cleanPartials: "clean:partials",

    cleanScriptsJS:         "clean:scripts@js",
    cleanScriptsTS:         "clean:scripts@ts",
    cleanScriptsCoffee:     "clean:scripts@coffee",
    cleanScriptsConcat:     "clean:scripts@concat",
    cleanScriptsMinified:   "clean:scripts@minified",
    cleanScriptsPrecompile: "clean:scripts@precompiled",
    cleanScriptsBrowserify: "clean:scripts@browserify",
    cleanScripts:           "clean:scripts",

    cleanStylesCSS:        "clean:styles@css",
    cleanStylesLess:       "clean:styles@less",
    cleanStylesStylus:     "clean:styles@stylus",
    cleanStylesConcat:     "clean:styles@concat",
    cleanStylesMinified:   "clean:styles@minified",
    cleanStylesPrecompile: "clean:styles@precompiled",
    cleanStyles:           "clean:styles",

    cleanManifest: "clean:manifest",

    cleanArchiveZip: "clean:archive@zip",
    cleanArchiveGzip: "clean:archive@gzip",
    cleanArchive: "clean:archive",

    clean:         "clean",

    liveReload: "livereload",
    manifest:   "manifest",

    staticClient:       "static:client",
    staticMedia:        "static:media",
    staticPartials:     "static:partials",
    staticTS:           "static:typescript",
    staticCoffeescript: "static:coffeescript",
    staticLess:         "static:less",
    staticStylus:       "static:stylus",
    _static:            "static",

    precompileScripts: "precompile:scripts",
    precompileStyles:  "precompile:styles",
    precompileFonts:   "precompile:fonts",
    precompileAll:     "precompile:all",
    precompile:        "precompile",

    scriptsJS:         "scripts:js",
    scriptsTS:         "scripts:ts",
    scriptsCoffee:     "scripts:coffee",
    scriptsBrowserify: "scripts:browserify",
    scriptsLintEslint: "scripts:lint@eslint",
    scriptsConcat:     "scripts:concat",
    scriptsMinify:     "scripts:minify",
    scripts:           "scripts",

    stylesCSS:    "styles:css",
    stylesStylus: "styles:stylus",
    stylesConcat: "styles:concat",
    stylesMinify: "styles:minify",
    styles:       "styles",

    buildIncrement: "build:increment",
    buildFresh:     "build:fresh",
    build:          "build",

    init:           "init",

    archiveZip:     "archive:zip",
    archiveGzip:    "archive:gzip",
    archive:        "archive"
};
