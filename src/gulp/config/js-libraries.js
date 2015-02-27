var path = require("path");

/*
 * These are javascript libraries from bower packages that are to be included
 * in the build
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = [
    /*
     * Core Libraries that aren't plugins of some kind
     */

    /*
     * jQuery
     * Generic, powerful and famous javascript abstraction framework
     * Included first since so many things depend on it
     */
    path.resolve(
        "bower_components",
        "jquery",
        "dist",
        "jquery.js"
    ),

    /*
     * AngularJS
     * WebApp centric javascript abstraction framework
     * Mostly behind everything
     */
    path.resolve(
        "bower_components",
        "angular",
        "angular.js"
    ),

    /*
     * Underscore
     * Suite of small helper tools and what-not for javascript
     */
    path.resolve(
        "bower_components",
        "underscore",
        "underscore.js"
    ),

    /*
     * Modernizr
     * Better feature detection for client browser capabilities
     */
    path.resolve(
        "bower_components",
        "modernizr",
        "modernizr.js"
    ),

    /*
     * EaselJS
     * HTML5 Canvas abstraction library
     */
    path.resolve(
        "bower_components",
        "easeljs",
        "lib",
        "easeljs-0.8.0.combined.js"
    ),

    /*
     * D3
     * Famous data visualization library
     * Very good a representing data in on any browser
     */
    path.resolve(
        "bower_components",
        "d3",
        "d3.js"
    ),

    /*
     * Kinetic
     * High-performance and powerful HTML5 abstraction framework
     */
    path.resolve(
        "bower_components",
        "kinetic",
        "kinetic.js"
    ),

    /*
     * ThreeJS
     * Very famous 3D abstraction library
     */
    path.resolve(
        "bower_components",
        "threejs",
        "build",
        "three.js"
    ),

    /*
     * Moment
     * Standardize, format, and make easy to work with time stamps
     */
    path.resolve(
        "bower_components",
        "moment",
        "min",
        "moment-with-locales.js"
    ),

    /*
     * LocalForage
     * Makes working with in-browser memory standardized and easy among all
     * browsers
     */
    path.resolve(
        "bower_components",
        "localforage",
        "dist",
        "localforage.js"
    ),

    /*
     * FullCalendar
     * Calendar library
     */
    path.resolve(
        "bower_components",
        "fullcalendar",
        "fullcalendar.js"
    ),

    /*
     * jqPlot
     * Plot library
     */
    path.resolve(
        "bower_components",
        "jqplot",
        "jquery.jqplot.js"
    ),

    /*
     * jqPlot Plugins
     * Plugins to jqPlot
     */
    path.resolve(
        "bower_components",
        "jqplot",
        "plugins",
        "**",
        "*.min.js"
    ),

    /*
     * Phaser
     * Famous 2D video game software for browsers
     */
    path.resolve(
        "bower_components",
        "phaser",
        "build",
        "phaser.js"
    ),

    /*
     * jQuery Plugins
     */

    /*
     * jQuery Finger
     * Powerful touch support and mouse fallback
     */
    path.resolve(
        "bower_components",
        "jquery.finger",
        "dist",
        "jquery.finger.js"
    ),

    /*
     * jQuery Textfill
     * Resize text to fit within a container of some kind
     */
    path.resolve(
        "bower_components",
        "jquery-textfill-try",
        "source",
        "jquery.textfill.js"
    ),

    /*
     * jQuery Blast
     * Explode words and sentences to individual letters in order to work with
     * them individually
     */
    path.resolve(
        "bower_components",
        "blast-text",
        "jquery.blast.js"
    ),

    /*
     * jQuery Lettering
     * Explode words and sentences to individual letters in order to work with
     * them individually (Another good alternative to the above)
     */
    path.resolve(
        "bower_components",
        "Lettering.js",
        "jquery.lettering.js"
    ),

    /*
     * jQuery Tooltipster
     * Better and more uniformed tooltips
     */
    path.resolve(
        "bower_components",
        "tooltipster",
        "js",
        "jquery.tooltipster.js"
    ),

    /*
     * jQuery Unslider
     * Create image slideshows
     */
    path.resolve(
        "bower_components",
        "unslider",
        "src",
        "unslider.js"
    ),

    /*
     * jQuery Knob
     * Powerful and amazing knobs with full touch support
     */
    path.resolve(
        "bower_components",
        "jquery-knob",
        "js",
        "jquery.knob.js"
    ),

    /*
     * jQuery resize
     * Element resizer
     */
    path.resolve(
        "bower_components",
        "javascript-detect-element-resize",
        "jquery.resize.js"
    ),

    /*
     * AngularJS Plugins
     */

    /*
     * Angular Animate
     * Perform CSS3 Animations
     */
    path.resolve(
        "bower_components",
        "angular-animate",
        "angular-animate.js"
    ),

    /*
     * Angular Cookies
     * Read and write browser cookies
     */
    path.resolve(
        "bower_components",
        "angular-cookies",
        "angular-cookies.js"
    ),

    /*
     * Angular Loader
     * Dynamically load other AngularJS files
     */
    path.resolve(
        "bower_components",
        "angular-loader",
        "angular-loader.js"
    ),

    /*
     * Angular Messages
     * Handles the complexity of informative messages like errors and such
     */
    path.resolve(
        "bower_components",
        "angular-messages",
        "angular-messages.js"
    ),

    /*
     * Angular Mocks
     * Angular unit testing
     */
    path.resolve(
        "bower_components",
        "angular-mocks",
        "angular-mocks.js"
    ),

    /*
     * Angular Resource
     * Interaction support for RESTful services
     */
    path.resolve(
        "bower_components",
        "angular-resource",
        "angular-resource.js"
    ),

    /*
     * Angular Sanitize
     * Client-side sanitization plugin
     */
    path.resolve(
        "bower_components",
        "angular-sanitize",
        "angular-sanitize.js"
    ),

    /*
     * Angular Scenario
     * Testing plugin
     */
    path.resolve(
        "bower_components",
        "angular-scenario",
        "angular-scenario.js"
    ),

    /*
     * Angular Touch
     * Full touch support
     */
    path.resolve(
        "bower_components",
        "angular-touch",
        "angular-touch.js"
    ),

    /*
     * Angular Gridster
     * Moveable Windows 8 like tiles
     */
    path.resolve(
        "bower_components",
        "angular-gridster",
        "src",
        "angular-gridster.js"
    ),

    /*
     * Angular Knob
     * AngularJS wrapper around jQuery knob plugin
     */
    path.resolve(
        "bower_components",
        "angular-knob",
        "src",
        "angular-knob.js"
    ),

    /*
     * Angular Parallax
     * Image Parallax
     */
    path.resolve(
        "bower_components",
        "angular-parallax",
        "scripts",
        "angular-parallax.js"
    ),

    /*
     * Angular Route
     * Single page app router
     */
    path.resolve(
        "bower_components",
        "angular-route",
        "angular-route.js"
    ),

    /*
     * Angular UI Router
     */
    path.resolve(
        "bower_components",
        "ui-route",
        "release",
        "angular-ui-router.js"
    ),

    /*
     * Angular UI Utils
     */
    path.resolve(
        "bower_components",
        "ui-utils",
        "ui-utils.js"
    ),

    /*
     * Angular UI Select
     */
    path.resolve(
        "bower_components",
        "angular-ui-select",
        "dist",
        "select.js"
    ),

    /*
     * Angular UI Calendar
     */
    path.resolve(
        "bower_components",
        "angular-ui-calendar",
        "src",
        "calendar.js"
    ),

    /*
     * Angular UI Sortable
     */
    path.resolve(
        "bower_components",
        "angular-ui-sortable",
        "sortable.js"
    ),

    /*
     * Angular UI Map
     */
    path.resolve(
        "bower_components",
        "angular-ui-map",
        "ui-map.js"
    ),

    /*
     * Angular UI Layout
     */
    path.resolve(
        "bower_components",
        "angular-ui-layout",
        "ui-layout.js"
    ),

    /*
     * Angular UI Slider
     */
    path.resolve(
        "bower_components",
        "angular-ui-slider",
        "src",
        "slider.js"
    ),

    /*
     * Angular UI Date
     */
    path.resolve(
        "bower_components",
        "angular-ui-date",
        "src",
        "date.js"
    ),

    /*
     * Angular UI Chart
     */
    path.resolve(
        "bower_components",
        "angular-ui-chart",
        "src",
        "chart.js"
    ),

    /*
     * Angular UI Bootstrap
     * AngularJS wrapper around Bootstrap
     */
    path.resolve(
        "bower_components",
        "angular-ui-bootstrap-bower",
        "ui-bootstrap.js"
    ),

    /*
     * Angular UI Bootstrap Templates
     * Templates for AngularJS Bootstrap wrapper
     */
    path.resolve(
        "bower_components",
        "angular-ui-bootstrap-bower",
        "ui-bootstrap-tpls.js"
    ),

    /*
     * CreateJS plugins
     */

    /*
     * TweenJS
     * Motion tweening abstraction
     */
    path.resolve(
        "bower_components",
        "TweenJS",
        "lib",
        "tweenjs-0.6.0.combined.js"
    ),

    /*
     * PreloadJS
     * Resource preloading abstraction
     */
    path.resolve(
        "bower_components",
        "PreloadJS",
        "lib",
        "preloadjs-0.6.0.combined.js"
    ),

    /*
     * SoundJS
     * Sound abstraction framework
     * Makes working with audio a breeze
     */
    path.resolve(
        "bower_components",
        "SoundJS",
        "lib",
        "soundjs-0.6.0.combined.js"
    )
];
