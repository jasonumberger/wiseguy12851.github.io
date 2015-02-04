"use strict";

var lazypipe = require('lazypipe');
var livereload = require("../logic/livereload");

var startPipe = require("./start");

exports.full = lazypipe()
    .pipe(startPipe)
    .pipe(function()
          {
              livereload.reload();
          });
