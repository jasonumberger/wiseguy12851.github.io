// Ensure cwd is set correctly no matter where we are
process.chdir(__dirname);

// Just load everything from there
require("./src/gulp");
