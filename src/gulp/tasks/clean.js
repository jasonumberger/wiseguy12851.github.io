"use strict";

var gulp = require("gulp");
var runSequence = require('run-sequence');
var names = require("../../../project/config").gulp.names;
var cleanPipes = require("../pipes/clean");

// Erase the build folder, this erases everything that gulp ever processed or
// touched resulting in a complete revert of anything gulp might have done

gulp.task(
    names.cleanClient,
    function()
    {
        return cleanPipes.client();
    }
);

gulp.task(
    names.cleanRoot,
    function()
    {
        return cleanPipes.root();
    }
);

gulp.task(
    names.cleanPrecompiled,
    function(cb)
    {
        runSequence(
            [
                names.cleanScriptsPrecompile,
                names.cleanStylesPrecompile,
                names.cleanFonts
            ],
            cb
        );
    }
);

gulp.task(
    names.cleanFonts,
    function()
    {
        return cleanPipes.fonts();
    }
);

gulp.task(
    names.cleanMedia,
    function()
    {
        return cleanPipes.media();
    }
);

gulp.task(
    names.cleanPartials,
    function()
    {
        return cleanPipes.partials();
    }
);

gulp.task(
    names.cleanScriptsJS,
    function()
    {
        return cleanPipes.scriptsJS();
    }
);

gulp.task(
    names.cleanScriptsTS,
    function()
    {
        return cleanPipes.scriptsTS();
    }
);

gulp.task(
    names.cleanScriptsCoffee,
    function()
    {
        return cleanPipes.scriptsCoffee();
    }
);

gulp.task(
    names.cleanScriptsBrowserify,
    function()
    {
        return cleanPipes.scriptsBrowserify();
    }
);

gulp.task(
    names.cleanScriptsConcat,
    function()
    {
        return cleanPipes.scriptsConcat();
    }
);

gulp.task(
    names.cleanScriptsMinified,
    function()
    {
        return cleanPipes.scriptsMinified();
    }
);

gulp.task(
    names.cleanScriptsPrecompile,
    function()
    {
        return cleanPipes.scriptsPrecompile();
    }
);

gulp.task(
    names.cleanScripts,
    function(cb)
    {
        runSequence(
            [
                names.cleanScriptsJS,
                names.cleanScriptsTS,
                names.cleanScriptsCoffee,
                names.cleanScriptsBrowserify,
                names.cleanScriptsConcat,
                names.cleanScriptsMinified,
                names.cleanScriptsPrecompile
            ],
            cb
        );
    }
);

gulp.task(
    names.cleanStylesCSS,
    function()
    {
        return cleanPipes.stylesCSS();
    }
);

gulp.task(
    names.cleanStylesLess,
    function()
    {
        return cleanPipes.stylesLess();
    }
);

gulp.task(
    names.cleanStylesStylus,
    function()
    {
        return cleanPipes.stylesStylus();
    }
);

gulp.task(
    names.cleanStylesConcat,
    function()
    {
        return cleanPipes.stylesConcat();
    }
);

gulp.task(
    names.cleanStylesMinified,
    function()
    {
        return cleanPipes.stylesMinified();
    }
);

gulp.task(
    names.cleanStylesPrecompile,
    function()
    {
        return cleanPipes.stylesPrecompile();
    }
);

gulp.task(
    names.cleanStyles,
    function(cb)
    {
        runSequence(
            [
                names.cleanStylesCSS,
                names.cleanStylesLess,
                names.cleanStylesStylus,
                names.cleanStylesConcat,
                names.cleanStylesMinified,
                names.cleanStylesPrecompile
            ],
            cb
        );
    }
);

gulp.task(
    names.cleanManifest,
    function()
    {
        return cleanPipes.manifest();
    }
);

gulp.task(
    names.clean,
    function(cb)
    {
        runSequence(
            [
                names.cleanRoot
            ],
            cb
        );
    }
);
