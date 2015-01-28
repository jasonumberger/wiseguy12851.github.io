"use strict";

var gulp = require("gulp");
var manifest = require("gulp-manifest");
var livereload = require("../config/livereload");

function genManifest()
{
    var from =
    [
        // Only minified files
        "./build.min.js",
        "./build.min.css",

        // Include Fonts
        "./generated/fonts/**/*",

        // Include any media
        "./media/offline/**/*",

        // Include Angular Pages
        "./partials/**/*"
    ];

    var to = "./";

    gulp.src(from).pipe(
        manifest(
            {
                filename: "app.manifest",
                exclude: [
                    "app.manifest"
                ],

                network: [
                    "*"
                ],

                fallback: [

                ],

                preferOnline: false,

                timestamp: false,
                hash: true

            })).pipe(gulp.dest(to)).pipe(livereload());
}

// Generate application manifest for offline mode app
gulp.task(
    "Build:Manifest", ["Prep:Scripts", "Prep:Styles"], function()
    {
        genManifest();
    });

// Generate application manifest for offline mode app
gulp.task(
    "Build:ManifestOnly", function()
    {
        genManifest();
    });

//gulp.task("Build", ["Build:Manifest"]);
gulp.task("Build", ["Build:Manifest"]);
