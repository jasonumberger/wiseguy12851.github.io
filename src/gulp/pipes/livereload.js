"use strict";

var lazypipe = require('lazypipe');
var livereload = require("../wrapper/livereload");

exports.normal = lazypipe().pipe(livereload);

exports.full = lazypipe().pipe(livereload.reload);
