var path = require("path");

/*
 * These are all the various project paths
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

// Project source files
exports.source = {
    // Initial Webpage (Production)
    initPageProd: path.resolve("index.html"),

    // Initial Webpage (Development)
    initPageDev:  path.resolve("index-dev.html"),

    // Gulp src files
    gulp:         path.resolve(
        "src",
        "gulp",
        "**",
        "*.js"
    ),

    // Project public root files
    client:       path.resolve(
        "src",
        "client",
        "*"
    ),

    // Project supplied fonts
    fonts:        path.resolve(
        "src",
        "client",
        "fonts",
        "**",
        "*"
    ),

    // Projct supplied media
    media:        path.resolve(
        "src",
        "client",
        "media",
        "**",
        "*"
    ),

    // Project supplied html partials
    partials:     path.resolve(
        "src",
        "client",
        "partials",
        "**",
        "*.html"
    ),

    // Project supplied scripts
    javascript:   path.resolve(
        "src",
        "client",
        "scripts",
        "**",
        "*.js"
    ),
    typescript:   path.resolve(
        "src",
        "client",
        "scripts",
        "**",
        "*.ts"
    ),
    coffeescript: path.resolve(
        "src",
        "client",
        "scripts",
        "**",
        "*.coffee"
    ),

    // Project supplied styles
    css:          path.resolve(
        "src",
        "client",
        "styles",
        "**",
        "*.css"
    ),
    less:         path.resolve(
        "src",
        "client",
        "styles",
        "**",
        "*.less"
    ),
    stylus:       path.resolve(
        "src",
        "client",
        "styles",
        "**",
        "*.styl"
    )
};

// Directly copy source to here, no processing is done
exports.destination = {
    root:     path.resolve("build"),
    client:   path.resolve(
        "build",
        "client"
    ),
    fonts:    path.resolve(
        "build",
        "client",
        "fonts"
    ),
    media:    path.resolve(
        "build",
        "client",
        "media"
    ),
    partials: path.resolve(
        "build",
        "client",
        "partials"
    ),

    javascript:   path.resolve(
        "build",
        "client",
        "scripts"
    ),
    typescript:   path.resolve(
        "build",
        "client",
        "scripts"
    ),
    coffeescript: path.resolve(
        "build",
        "client",
        "scripts"
    ),

    css:    path.resolve(
        "build",
        "client",
        "styles"
    ),
    less:   path.resolve(
        "build",
        "client",
        "styles"
    ),
    stylus: path.resolve(
        "build",
        "client",
        "styles"
    )
};

// These are special generated files, they are placed in the client destination
// folder. They dont have a path because they are just an output file name
// to a path in memory which is the client folder
exports.preperation = {
    scriptsConcat:     "build.js",
    scriptsMinified:   "build.min.js",
    scriptsPrecompile: "precompile.js",
    scriptsBrowserify: "bundle.js",

    stylesConcat:     "build.css",
    stylesMinified:   "build.min.css",
    stylesPrecompile: "precompile.css",

    manifest: "app.manifest",

    // These are appended to the "root" path, not "client"
    archiveZip: "app.zip",

    // this file will also have .gz aded to the end due to being gzipped as well
    archiveTar: "app.tar"
};
