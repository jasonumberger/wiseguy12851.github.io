"use strict";

var lazypipe = require('lazypipe');
var livereload = require("../logic/livereload");
var start = require("./start");

exports.full = lazypipe()
    .pipe(start)
    .pipe(function()
          {
              livereload.reload();
          });
