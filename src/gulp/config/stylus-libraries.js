var path = require("path");

/*
 * These are stylus import libraries to be referenced when compiling stylus
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = [
    path.resolve(
        "bower_components",
        "bootstrap-stylus",
        "bootstrap"
    ),
    path.resolve(
        "src",
        "client",
        "styles"
    )
];
