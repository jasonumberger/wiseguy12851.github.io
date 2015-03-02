var gulp = require("gulp"),
    lazypipe = require("lazypipe"),
    bower = require("gulp-bower"),
    path = require("path"),

    names = require(path.resolve("project", "config")).gulp.names;

exports.bowerInstall =
    lazypipe()
        .pipe(bower, {cmd: "install"});

exports.bowerUpdate =
    lazypipe()
        .pipe(bower, {cmd: "update"});
