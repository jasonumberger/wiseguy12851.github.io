"use strict";

var gulp = require("gulp");
var lazypipe = require('lazypipe');
var livereloadPipes = require("./livereload");
var src = require("../../../project/config").gulp.paths.src;
var dest = require("../../../project/config").gulp.paths.dest;

exports.client = lazypipe()
    .pipe(gulp.src, src.client)
    .pipe(gulp.dest, dest.client);

exports.clientLive = exports.client
    .pipe(livereloadPipes.normal);

exports.media = lazypipe()
    .pipe(gulp.src, src.media)
    .pipe(gulp.dest, dest.media);

exports.mediaLive = exports.media
    .pipe(livereloadPipes.normal);

exports.partials = lazypipe()
    .pipe(gulp.src, src.partials)
    .pipe(gulp.dest, dest.partials);

exports.partialsLive = exports.partials
    .pipe(livereloadPipes.normal);

