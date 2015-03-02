var lazypipe   = require("lazypipe"), path = require("path"),
    livereload = require(path.resolve("src", "gulp", "wrapper", "livereload"));

exports.normal = lazypipe()
    .pipe(livereload);

exports.full = lazypipe()
    .pipe(livereload.reload);
