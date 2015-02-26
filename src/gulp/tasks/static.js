"use strict";

var gulp = require("gulp");
var runSequence = require('run-sequence');
var staticPipes = require("../pipes/static");
var names = require("../../../project/config").gulp.names;

gulp.task(
    names.staticClient,
    function()
    {
        return staticPipes.client();
    }
);

gulp.task(
    names.staticMedia,
    function()
    {
        return staticPipes.media();
    }
);

gulp.task(
    names.staticPartials,
    function()
    {
        return staticPipes.partials();
    }
);

gulp.task(
    names.staticTS,
    function()
    {
        return staticPipes.typescript();
    }
);

gulp.task(
    names.staticCoffeescript,
    function()
    {
        return staticPipes.coffeescript();
    }
);

gulp.task(
    names.staticLess,
    function()
    {
        return staticPipes.less();
    }
);

gulp.task(
    names.staticStylus,
    function()
    {
        return staticPipes.stylus();
    }
);

gulp.task(
    names._static,
    function(cb)
    {
        runSequence(
            [
                names.staticClient,
                names.staticMedia,
                names.staticPartials,
                names.staticTS,
                names.staticCoffeescript,
                names.staticLess,
                names.staticStylus
            ],
            cb
        );
    }
);
