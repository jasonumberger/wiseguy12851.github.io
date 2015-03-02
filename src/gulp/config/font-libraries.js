var path = require("path");

/*
 * These are fonts from bower packages that are to be included in the build
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = [
    /*
     * Fontawesome
     * Large selection of amazing fonts
     */
    path.resolve("bower_components", "fontawesome", "fonts", "**", "*"),

    /*
     * Bootstrap Stylus
     * Set of core fonts through bootstrap
     */
    path.resolve("bower_components", "bootstrap-stylus", "fonts", "**", "*")
];
