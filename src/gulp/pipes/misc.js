var gulp = require("gulp"),
    lazypipe = require("lazypipe"),
    bower = require("gulp-bower"),
    shell = require("gulp-shell"),
    yargs = require("yargs"),
    path = require("path"),

    names = require(path.resolve("project", "config")).gulp.names;

var argv = yargs.argv;

exports.bowerInstall =
    lazypipe()
        .pipe(bower, {cmd: "install"});

exports.bowerUpdate =
    lazypipe()
        .pipe(bower, {cmd: "update"});

exports.gitCommitPush =
    lazypipe()
        .pipe(function doGitCommitPush()
        {
            "use strict";

            argv = yargs
                .usage("Usage: gulp " + names.gitCommitPush +
                    " -[message|m|msg] Commit Message Here",
                {
                    "message": {
                        alias:    ["m", "msg"],
                        demand:   true,
                        describe: "Commit message",
                        type:     "string"
                    }
                })
                .argv;

            shell.task([
                "echo Doing something",
                "git add -A .",
                "git commit -am \"" + argv.message + "\"",
                "git push"
            ])();

            return res;
        });
