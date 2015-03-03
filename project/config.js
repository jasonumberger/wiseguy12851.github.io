"use strict";

var path = require("path");

module.exports = require('rc')("wiseguy12851",
{
    // All possible options and their defaults are here

    // Options for gulp
    gulp:
    {
        // Gulp paths
        paths:
        {
            // Source files to work with
            src: require(path.resolve("src", "gulp", "config", "paths")).source,

            // Destination paths to placed worked with items
            dest: require(path.resolve("src", "gulp", "config", "paths")).destination,

            // Processed files
            prep: require(path.resolve("src", "gulp", "config", "paths")).preperation,

            // Bower CSS Libraries
            css: require(path.resolve("src", "gulp", "config", "css-libraries")),

            // Bower Font Libraries
            fonts: require(path.resolve("src", "gulp", "config", "font-libraries")),

            // Bower Javascript libraries
            js: require(path.resolve("src", "gulp", "config", "js-libraries")),

            // Bower stylus search paths
            stylus: require(path.resolve("src", "gulp", "config", "stylus-libraries"))
        },

        log: require(path.resolve("src", "gulp", "config", "log")),

        // Task invoke names
        names: require(path.resolve("src", "gulp", "config", "names")),

        // Args
        args: require(path.resolve("src", "gulp", "config", "args")),

        // All messages and text
        msg: require(path.resolve("src", "gulp", "config", "msg"))
    }
});
