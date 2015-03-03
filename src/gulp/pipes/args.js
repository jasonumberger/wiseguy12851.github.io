var lazypipe = require("lazypipe"),
    shell = require("gulp-shell"),
    path  = require("path"),
    argv = require(path.resolve("src", "gulp", "wrapper", "cache")).argv;

exports.gitCommitPush =
    lazypipe()
        .pipe(function doGitCommitPush()
        {
            "use strict";

            var res = shell.task([
                "git add -A .",
                "git commit -am \"" + argv.message + "\"",
                "git push"
            ]);

            res();

            return res;
        });
