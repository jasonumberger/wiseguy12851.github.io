// Load all tasks. Tasks will load the logic they require and reference the data
// they need. This essentialy does everything.
// This is also for gulp only so anything returned is ignored as its assumed
// to be irrevelent

require("include-all")(
    {
        dirname: require("path").resolve(
            "src",
            "gulp",
            "tasks"
        ),
        filter:  /(.+)\.js$/
    }
);
