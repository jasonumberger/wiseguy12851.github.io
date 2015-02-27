var lazypipe = require("lazypipe"),
    bower    = require("gulp-bower");

exports.bowerInstall = lazypipe().pipe(
    bower,
    {cmd: "install"}
);

exports.bowerUpdate = lazypipe().pipe(
    bower,
    {cmd: "update"}
);
