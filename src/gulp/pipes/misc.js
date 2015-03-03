var gulp = require("gulp"),
    lazypipe = require("lazypipe"),
    bower = require("gulp-bower"),
    path = require("path"),
    NwBuilder = require("node-webkit-builder"),

    names = require(path.resolve("project", "config")).gulp.names,
    src = require(path.resolve("project", "config")).gulp.paths.src,
    dest = require(path.resolve("project", "config")).gulp.paths.dest,
    prep = require(path.resolve("project", "config")).gulp.paths.prep;

exports.bowerInstall =
    lazypipe()
        .pipe(bower, {cmd: "install"});

exports.bowerUpdate =
    lazypipe()
        .pipe(bower, {cmd: "update"});

exports.nodeWebkit =
    lazypipe()
        .pipe(function doBuildWebkit()
        {
            "use strict";

            var nw = new NwBuilder({
                // Pass variable to the object since the function is called from
                // this scope
                nodeWebkitBuildName: prep.nodeWebkitBuildName,

                appName: "wiseguy12851.github.io",
                appVersion: "v1.0b",
                files:     path.resolve(dest.client, "**", "*"),
                platforms: ["win", "osx", "linux"],
                buildDir: dest.nodeWebkitBuild,
                cacheDir: dest.nodeWebkitDownloads,
                buildType: function() {return prep.nodeWebkitBuildName},
                macZip: true
            });

            nw.on('log', console.log);

            nw.build().then(function()
            {
                console.log("completed");
            }).catch(function(error)
            {
                console.error(error);
            });

            return gulp.src("");
        });
