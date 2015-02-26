"use strict";

// Note: These are defaults and may be overidden via an rc file. Always use
// the project config file to access these, never directly.

var chalk = require("chalk");

module.exports = {
    pipeStart: chalk.green + "Begun",
    pipeEnd:   chalk.green + "End"
};
