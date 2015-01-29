var gulp = require("gulp");
var git = require("gulp-git");

// Stage all files
gulp.task('Git:Stage', function()
{
    var target = gulp.env.stageFiles || "./**/*";
    var args = gulp.env.stageArgs || "-A";

    return gulp.src(target)
        .pipe(git.add({args: args}));
});

// Commit them
gulp.task('Git:Commit', function()
{
    var target = gulp.env.commitFiles || "./**/*";
    var args = gulp.env.commitArgs || "-a";
    var msg = gulp.env.msg || "Empty Message Body";

    return gulp.src(target)
        .pipe(git.commit(msg, {args: args}));
});

// Deal with remotes
gulp.task('Git:AddRemote', function()
{
    var name = gulp.env.name || "remote";
    var url = gulp.env.url || "";

    git.addRemote(name,  url, function(err)
    {
        if(err) throw err;
    });
});

// Push them to origin
gulp.task('Git:Push', function()
{
    var repo = gulp.env.repo || "origin";
    var branch = gulp.env.branch || "master";
    var args = gulp.env.pushArgs || "";

    git.push(repo, branch, {args: args}, function(err)
    {
        if(err) throw err;
    });
});

// Pull them from origin
gulp.task('Git:Pull', function()
{
    var repo = gulp.env.repo || "origin";
    var branch = gulp.env.branch || "master";
    var args = gulp.env.pullArgs || "";

    git.pull(repo, branch, {args: args}, function(err)
    {
        if(err) throw err;
    });
});

// Tag
gulp.task('Git:Tag', function()
{
    var name = gulp.env.name || "EmptyName";
    var msg = gulp.env.msg || "Empty Message";

    git.tag(name, msg, function(err)
    {
        if(err) throw err;
    });
});

// New Branch
gulp.task('Git:CreateBranch', function()
{
    var name = gulp.env.name || "EmptyName";

    git.branch(name, function(err)
    {
        if(err) throw err;
    });
});

// Checkout Branch
gulp.task('Git:SwitchBranch', function()
{
    var name = gulp.env.name || "EmptyName";

    git.checkout(name, function(err)
    {
        if(err) throw err;
    });
});
