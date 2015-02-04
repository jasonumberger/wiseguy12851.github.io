"use strict";

var lazypipe = require('lazypipe');
var livereload = require("../logic/livereload");

exports.full = lazypipe()
    .pipe(function()
          {
              livereload.reload();
          });
