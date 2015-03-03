var path = require("path");

/*
 * These are the args configuration for the program and describe command line
 * processing.
 *
 * Its messy, needs revisions, and as of now doesnt make too much sense with rc
 * as its practically impossible to easily override these. That wil be saved for
 * an upcomming revision
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

// Used for the tasks that dont really make use of args
var genSimpleCmd = function(name, desc)
{
    "use strict";

    return {
        name:     name,
        usage:    "Usage: gulp " + name,
        desc:     desc,
        examples: [
            "gulp " + name
        ]
    }
};

module.exports = function(){

    // The files won't be ready until rc is done processing, since this file is
    // only a part of rc, we must stash this into a function so that when its
    // executed rc will be done and we can pull other needed info from it
    names = require(path.resolve("project", "config")).gulp.names;

    return {
        /*
         * Various Globals
         */
        general:  {
            /*
             * Global usage message
             */
            usage:      "Usage: gulp [tasks] [options]\n" +
                        "Note: You can also use gulp [task] --help to get help for a " +
            "specific command.",

            /*
             * Epilog shown at bottom
             */
            epilog:     "(c) 2015 John Mothershed, under the GPLv3 Affero license\n" +
                        "For more help, to contribute, or to send feedback/report an \n" +
            "issue, visit github.com/wiseguy12851/wiseguy12851.github.io",

            /*
             * Wrapping preferences in terminal (Max line length)
             */
            wrap:       80,

            /*
             * Fail on ill-configured option?
             */
            strict:     true,

            /*
             * Setup a help key
             */
            help:       {
                key:  "help",
                desc: "Global or task specific help"
            },

            /*
             * Setup a version key
             */
            version:    {
                version: "v1.0 beta",
                key:     "my-version",
                desc:    "Printout this version"
            },

            /*
             * Show help on fail
             */
            helpOnFail: {
                enable: false,
                msg:    "Specify --help for available options"
            }
        },

        /*
         * Individual commands
         */
        commands: [
            /*
             * Watch
             */
            genSimpleCmd(names.watch,
                "Begin watching for file changes and build accordingly"),

            /*
             * Bower
             */
            genSimpleCmd(names.bowerUpdate,
                "Update bower packages"),

            genSimpleCmd(names.bowerInstall,
                "Install bower packages from .bower.json file"),

            genSimpleCmd(names.bower,
                "Perform a bower update, alias for " + names.bowerUpdate),

            /*
             * Git
             */
            {
            name:  names.gitCommitPush,
            usage: "Usage: gulp " + names.gitCommitPush + " [--message|-m|--msg] commit message",

            desc: "Automatically commit all files, including new and removed files, " +
            "and push them to default",

            examples: [
                "gulp " + names.gitCommitPush + " -m Added some more " +
                "awesomeness"
            ],

            keys: [
                {
                    name:        "message",
                    describe:    "Git commit message",
                    alias:       ["m", "msg"],
                    demand:      "A git commit must have a commit message",
                    requiresArg: true,
                    nargs:       1
                }
            ]
        },

            /*
             * Clean Basics
             */
            genSimpleCmd(names.cleanClient,
                "Clean all files generated for the client"),

            genSimpleCmd(names.cleanRoot,
                "Clean all files generated at all"),

            genSimpleCmd(names.cleanPrecompiled,
                "Clean all precompiled files"),

            genSimpleCmd(names.cleanFonts,
                "Clean all fonts"),

            genSimpleCmd(names.cleanMedia,
                "Clean all media"),

            genSimpleCmd(names.cleanPartials,
                "Clean all partials"),

            /*
             * Clean Scripts
             */

            genSimpleCmd(names.cleanScriptsJS,
                "Clean all javascript files, this includes compiled scripts to " +
                "javascript"),

            genSimpleCmd(names.cleanScriptsTS,
                "Clean all typescript files"),

            genSimpleCmd(names.cleanScriptsCoffee,
                "Clean all coffeescript files"),

            genSimpleCmd(names.cleanScriptsConcat,
                "Clean concatenated scripts file"),

            genSimpleCmd(names.cleanScriptsMinified,
                "Clean minified scripts file"),

            genSimpleCmd(names.cleanScriptsPrecompile,
                "Clean precompiled scripts file"),

            genSimpleCmd(names.cleanScriptsBrowserify,
                "Clean browserified scripts file"),

            genSimpleCmd(names.cleanScripts,
                "Clean all scripts at all"),

            /*
             * Clean Styles
             */

            genSimpleCmd(names.cleanStylesCSS,
                "Clean all css files, this includes compiled styles to css"),

            genSimpleCmd(names.cleanStylesLess,
                "Clean all less files"),

            genSimpleCmd(names.cleanStylesStylus,
                "Clean all stylus files"),

            genSimpleCmd(names.cleanStylesConcat,
                "Clean concatenated styles file"),

            genSimpleCmd(names.cleanStylesMinified,
                "Clean minified styles file"),

            genSimpleCmd(names.cleanStylesPrecompile,
                "Clean precompiled styles file"),

            genSimpleCmd(names.cleanStyles,
                "Clean all styles at all"),

            /*
             * Clean Manifest
             */

            genSimpleCmd(names.cleanManifest,
                "Clean the manifest file"),

            /*
             * Clean Archive
             */

            genSimpleCmd(names.cleanArchiveZip,
                "Clean the archived zip file"),

            genSimpleCmd(names.cleanArchiveGzip,
                "Clean the archived gzip file"),

            genSimpleCmd(names.cleanArchive,
                "Clean both archives"),

            genSimpleCmd(names.clean,
                "Clean everything, alias to " + names.cleanRoot),

            /*
             * Livereload and Manifest
             */

            genSimpleCmd(names.liveReload,
                "Useless via the cli, used internally to provide a full " +
                "livereload page refresh"),

            genSimpleCmd(names.manifest,
                "Generate a manifest file, must used after the building has " +
                "been done or files will be left out"),

            /*
             * Static
             */

            genSimpleCmd(names.staticClient,
                "Copy over root level files in the client folder"),

            genSimpleCmd(names.staticMedia,
                "Copy over files in the media folder"),

            genSimpleCmd(names.staticMediaMinifyImages,
                "Minify images from media folder and copy them over under a " +
                ".min prefixed extension"),

            genSimpleCmd(names.staticPartials,
                "Copy over partials"),

            genSimpleCmd(names.staticTS,
                "Copy over typescript files as they are (no compiling)"),

            genSimpleCmd(names.staticCoffeescript,
                "Copy over coffeescript files as they are (no compiling)"),

            genSimpleCmd(names.staticLess,
                "Copy over less files as they are (no compiling)"),

            genSimpleCmd(names.staticStylus,
                "Copy over stylus files as they are (no compiling)"),

            genSimpleCmd(names._static,
                "Copy over all files as they are"),

            /*
             * Precompile
             */

            genSimpleCmd(names.precompileScripts,
                "Precompile scripts to a single file, this must be done before " +
                "any building. Concats all scripts from bower_packages folder."),

            genSimpleCmd(names.precompileStyles,
                "Precompile styles to a single file, this must be done before " +
                "any building. Concats all css styles from bower_packages folder."),

            genSimpleCmd(names.precompileFonts,
                "Precompile fonts to a single folder, this must be done before " +
                "any building. Copies over all fonts over from bower_packages and " +
                "within src/client folder"),

            genSimpleCmd(names.precompileAll,
                "Precompile everything"),

            genSimpleCmd(names.precompile,
                "Precompile everything, alias for " + names.precompileAll),

            /*
             * Scripts
             */

            genSimpleCmd(names.scriptsJS,
                "Copy over Javascript files as they dont need any compiling"),

            genSimpleCmd(names.scriptsTS,
                "Compile and copy over Typescript files"),

            genSimpleCmd(names.scriptsCoffee,
                "Compile and copy over Coffeescript files"),

            genSimpleCmd(names.scriptsBrowserify,
                "Browserify the index script file and output it all to a bundle " +
                "file. This expects all script files to be compiled beforehand"),

            genSimpleCmd(names.scriptsConcat,
                "Concatenate Javascript files into a single file. Please note " +
                "that this concatenates browserified and precompiled output so " +
                "have those run beforehand."),

            genSimpleCmd(names.scriptsMinify,
                "Minifies concatenated output, make sure to have run " +
                "concatenation beforehand"),

            genSimpleCmd(names.scripts,
                "Does all the script commands for you in the correct sync and " +
                "async order."),

            /*
             * Styles
             */

            genSimpleCmd(names.stylesCSS,
                "Copy over CSS files as they dont need any compiling"),

            genSimpleCmd(names.stylesLess,
                "Compile and copy over LESS files"),

            genSimpleCmd(names.stylesStylus,
                "Compile and copy over Stylus files"),

            genSimpleCmd(names.stylesConcat,
                "Concatenate CSS files into a single file. Please note " +
                "that this concatenates all compiled styles and precompiled " +
                "output so have those run beforehand."),

            genSimpleCmd(names.stylesMinify,
                "Minifies concatenated output, make sure to have run " +
                "concatenation beforehand"),

            genSimpleCmd(names.styles,
                "Does all the style commands for you in the correct sync and " +
                "async order."),

            genSimpleCmd(names.buildIncrement,
                "Performs a usual incremental build over the previous build. " +
                "Note this does not include precompiling as that should only " +
                "happen once."),

            genSimpleCmd(names.buildFresh,
                "Erases everything and starts over from scratch, precompiles " +
                "everything and then performs an incremental build"),

            genSimpleCmd(names.build,
                "Performs an incremental build, alias for " + names.buildIncrement),

            genSimpleCmd(names.init,
                "Intended to be used only once, it install all the bower " +
                "packages, then performs a fresh build. This way all you need to " +
                "do is 'npm install && gulp init'"),

            genSimpleCmd(names.archiveZip,
                "Archives the client build into a zip file, everything must be " +
                "done beforehand"),

            genSimpleCmd(names.archiveGzip,
                "Archives the client build into a gzip tar file, everything must be " +
                "done beforehand"),

            genSimpleCmd(names.archive,
                "Performs both archives")
        ],
        keys: [
            /*{
             // Key name
             name: "",

             // Key description
             describe: "",

             // Array of alias strings
             alias: [],

             // Default value and possibly a message overriding the value
             default: {},

             // Required message, or boolean for required or not
             demand: "",

             // Requires an argument to be present or not
             requiresArg: false,

             // Other keys that are required if this one is specified
             implies: [],

             // Key is alone and represents a flag or boolean
             boolean: false,

             // Key takes a string argument
             string: false,

             // Key takes an array argument
             array: false,

             // Key takes a json file argument expected to be parsed, loaded, and
             // assigned as the value
             config: false

             // Key takes n amount of arguments
             nargs: 0,
             }*/
        ]
    }
};
