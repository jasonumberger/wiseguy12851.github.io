var chalk = require("chalk");

/*
 * These are program output messages
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = {
    pipeStart: chalk.green + "Begun",
    pipeEnd:   chalk.green + "End"
};
