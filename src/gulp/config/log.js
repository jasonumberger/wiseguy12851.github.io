/*
 * These select which log levels to enable for output
 *
 * Please don't include or use these directly as the user may have overridden
 * some of these via one of many methods "rc" offers. Instead use them through
 * the project config file will will automatically apply user changes.
 */

module.exports = {
    // Available options are: error, warn, success, or debug
    enabledLogLevels: [
        "error",
        "warn",
        "success",
        "debug"
    ]
};
