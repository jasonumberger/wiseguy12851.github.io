"use strict";

// Note: These are defaults and may be overidden via an rc file. Always use
// the project config file to access these, never directly.

// Project source files
exports.source =
{
    // Initial Webpage (Production)
    initPageProd: "./index.html",

    // Initial Webpage (Development)
    initPageDev: "./index-dev.html",

    // Project public root files
    client: "./src/client/*",

    // Project supplied fonts
    fonts: "./src/client/fonts/**/*",

    // Projct supplied media
    media: "./src/client/media/**/*",

    // Project supplied html partials
    partials: "./src/client/partials/**/*.html",

    // Project supplied scripts
    javascript: "./src/client/scripts/**/*.js",
    typescript: "./src/client/scripts/**/*.ts",
    coffeescript: "./src/client/scripts/**/*.coffee",

    // Project supplied styles
    css: "./src/client/styles/**/*.css",
    less: "./src/client/styles/**/*.less",
    stylus: "./src/client/styles/**/*.styl"
};

// Directly copy source to here, no processing is done
exports.destination =
{
    root: "./build",
    client: "./build/client",
    fonts: "./build/client/fonts",
    media: "./build/client/media",
    partials: "./build/client/partials",

    javascript: "./build/client/scripts",
    typescript: "./build/client/scripts",
    coffeescript: "./build/client/scripts",

    css: "./build/client/styles",
    less: "./build/client/styles",
    stylus: "./build/client/styles"
};

// These take from the source, do stuff with them, and then place them
// here
exports.preperation =
{
    scripts_concat: "build.js",
    scripts_minified: "build.min.js",
    scripts_precompile: "precompile.js",
    scripts_browserify: "bundle.js",
    styles_concat: "build.css",
    styles_minified: "build.min.css",
    styles_precompile: "precompile.css",
    manifest: "app.manifest"
};
