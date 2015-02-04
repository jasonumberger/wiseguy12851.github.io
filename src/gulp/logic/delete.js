"use strict";

var del = require("del");

module.exports = function(path, cb)
{
    del(path,  cb);
};
