var gulp  = require("gulp");
var shell = require("gulp-shell");

gulp.task('Do:GitTo', shell.task([
    'gulp',
    'git add -A .',
    'git commit -a -m "' + (gulp.env.msg || "Empty Message Body" ) + '"',
    'git push '
]));

gulp.task('Do:GitFrom', shell.task([
    'git pull'
]));

gulp.task('Do:Startover', shell.task([
     'gulp Clean',
     'gulp Precompile',
     'gulp'
]));
