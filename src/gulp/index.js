// Load all tasks. Tasks will load the logic they require and reference the data
// they need. This essentialy does everything.
// This is also for gulp only so anything returned is ignored as its assumed
// to be irrevelent

var path = require("path"),
    _ = require("lodash");

// Load up argument parsing and everything tied to it
// save results in cache

var cache = require(path.resolve("src", "gulp", "wrapper", "cache"));
cache.argv = require(path.resolve("src", "gulp", "wrapper", "args")).parse();

// Disallow more than 1 non-hyphenated option
if(cache.argv._.length > 1) {
    console.log("No more than the gulp command and any applicable options is " +
    "allowed to be given");

    process.exit(1);
}

// Ensure command is in the list of commands
var commands = _.values(require(path.resolve("src", "gulp", "config", "names")));

if(_.indexOf(commands, cache.argv._[0]) === -1)
{
    console.log("No such command");
    process.exit(1);
}

require("include-all")({
        dirname: require("path").resolve("src", "gulp", "tasks"),
        filter:  /(.+)\.js$/
    });
