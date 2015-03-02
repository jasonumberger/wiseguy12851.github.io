"use strict";

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
            src: require("../src/gulp/config/paths").source,

            // Destination paths to placed worked with items
            dest: require("../src/gulp/config/paths").destination,

            // Processed files
            prep: require("../src/gulp/config/paths").preperation,

            // Bower CSS Libraries
            css: require("../src/gulp/config/css-libraries"),

            // Bower Font Libraries
            fonts: require("../src/gulp/config/font-libraries"),

            // Bower Javascript libraries
            js: require("../src/gulp/config/js-libraries"),

            // Bower stylus search paths
            stylus: require("../src/gulp/config/stylus-libraries")
        },

        log: require("../src/gulp/config/log"),

        // Task invoke names
        names: require("../src/gulp/config/names"),

        // Args
        args: require("../src/gulp/config/args"),

        // All messages and text
        msg: require("../src/gulp/config/msg")
    }
});
