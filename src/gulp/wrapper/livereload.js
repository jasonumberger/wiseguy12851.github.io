var livereload = require("gulp-livereload"),
    path = require("path"),

    src = require(path.resolve("project", "config")).gulp.paths.src;

livereload.options.reloadPage = src.initPageDev;

module.exports = livereload;
