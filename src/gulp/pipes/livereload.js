"use strict";

var lazypipe = require('lazypipe');
var livereload = require("../logic/livereload");

exports.normal = lazypipe()
    .pipe(livereload);

exports.full = lazypipe()
    .pipe(livereload.reload);
