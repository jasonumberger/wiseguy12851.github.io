"use strict";

// Note: These are defaults and may be overidden via an rc file. Always use
// the project config file to access these, never directly.

// Project source files
exports.source =
{
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
    client: "./build/final",
    fonts: "./build/final/fonts",
    media: "./build/final/media",
    partials: "./build/final/partials",

    javascript: "./build/final/scripts",
    typescript: "./build/final/scripts",
    coffeescript: "./build/final/scripts",

    css: "./build/final/styles",
    less: "./build/final/styles",
    stylus: "./build/final/styles"
};

// These take from the source, do stuff with them, and then place them
// here
exports.preperation =
{
    scripts_concat: "./build/final/scripts/build.js",
    scripts_minified: "./build/final/scripts/build.min.js",
    scripts_precompile: "./build/final/scripts/precompile.js",
    styles_concat: "./build/final/styles/build.js",
    styles_minified: "./build/final/styles/build.min.js",
    styles_precompile: "./build/final/styles/precompile.css",
    manifest: "./build/final/app.manifest"
};
