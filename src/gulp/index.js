// Load all tasks. Tasks will load the logic they require and reference the data
// they need. This essentialy does everything.
// This is also for gulp only so anything returned is ignored as its assumed
// to be irrevelent

var path = require("path");

// Load up argument parsing and everything tied to it
require(path.resolve("src", "gulp", "wrapper", "args")).parse();

require("include-all")({
        dirname: require("path").resolve("src", "gulp", "tasks"),
        filter:  /(.+)\.js$/
    });
