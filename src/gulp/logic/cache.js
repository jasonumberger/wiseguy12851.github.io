"use strict";

var cache = new require('mem-cache')(
    {
        timeoutDisabled: true
    });

module.exports = cache;
