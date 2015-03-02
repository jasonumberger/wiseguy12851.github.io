var lazypipe = require("lazypipe"),
    notify = require("gulp-notify"),
    path = require("path"),

    log      = require(path.resolve("src", "gulp", "wrapper", "log")),
    msg      = require(path.resolve("project", "config")).gulp.msg;

module.exports =
    lazypipe()
        .pipe(notify, msg.pipeEnd)
        .pipe(log.info, msg.pipeEnd);
