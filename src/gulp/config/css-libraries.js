var path = require("path");

/*
 * These are CSS files from bower packages that are to be included in the build
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = [
    /*
     * AngularJS Gridster CSS Support
     */
    path.resolve(
        "bower_components",
        "angular-gridster",
        "dist",
        "angular-gridster.min.css"
    ),

    /*
     * jQuery Tooltipster CSS Support
     */
    path.resolve(
        "bower_components",
        "tooltipster",
        "css",
        "tooltipster.css"
    ),

    /*
     * jQuery Tooltipster Shadow Theme
     */
    path.resolve(
        "bower_components",
        "tooltipster",
        "css",
        "themes",
        "tooltipster-shadow.css"
    ),

    /*
     * AngularJS UI Select CSS Support
     */
    path.resolve(
        "bower_components",
        "angular-ui-select",
        "dist",
        "select.css"
    ),

    /*
     * AngularJS UI Layout support
     */
    path.resolve(
        "bower_components",
        "angular-ui-layout",
        "ui-layout.css"
    ),

    /*
     * Fullcalendar CSS Support
     */
    path.resolve(
        "bower_components",
        "fullcalendar",
        "fullcalendar.css"
    ),

    /*
     * jqPlot CSS Support
     */
    path.resolve(
        "bower_components",
        "jqplot",
        "jquery.jqplot.css"
    )
];
