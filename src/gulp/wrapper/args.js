var yargs = require("yargs"),
    _yargs = require("yargs");
    argv = yargs.argv,
    command = argv._[0],
    _ = require("lodash"),
    path = require("path"),
    argsConfig = require(path.resolve("project", "config")).gulp.args();

// Internal processing for keys
var keyProcess = function(keyChain)
{
    "use strict";

    // If chain isnt present return immidiately
    if(!keyChain) {return;}

    _.forEach(keyChain, function(key, index, keys)
    {
        "use strict";

        var config = undefined;

        // Skip the key all-together if a name isn't present
        if(!_(key).has("name")) {return;}

        if(_(key).has("describe"))
        {
            _yargs = _yargs.describe(key.name, key.describe);
        }

        if(_(key).has("alias"))
        {
            var tmp = {};
            tmp[key.name] = key.alias;
            _yargs = _yargs.alias(tmp);
        }

        if(_(key).has("default"))
        {
            _yargs = _yargs.default(key.name, key.default.value, key.default.desc);
        }

        if(_(key).has("demand"))
        {
            _yargs = _yargs.demand(key.name, key.demand);
        }

        if(_(key).has("requiresArg") && key.requiresArg)
        {
            _yargs = _yargs.requiresArg(key.name);
        }

        if(_(key).has("implies"))
        {
            _.forEach(key.implies, function(imply, index2, implies)
            {
                _yargs = _yargs.implies(key.name, imply);
            });
        }

        if(_(key).has("boolean") && key.boolean)
        {
            _yargs = _yargs.boolean(key.name);
        }

        if(_(key).has("string") && key.string)
        {
            _yargs = _yargs.string(key.name);
        }

        if(_(key).has("array") && key.array)
        {
            _yargs = _yargs.array(key.name);
        }

        if(_(key).has("config") && key.config)
        {
            _yargs = _yargs.config(key.name);
        }

        /*
        // Doesnt work for some reason
        if(_(key).has("nargs"))
        {
            _yargs = _yargs.nargs(key.name, key.nargs);
        }
        */
    });
};

// Resets yargs
exports.reset = function doReset()
{
    "use strict";

    _yargs = yargs.reset();
};

// Resets and reparses yargs, it also loads up and tailors yargs to a specific
// command in args
// if _command is present, load up that command, if false dont load any command
// and if not provided gather the default gulp command
exports.parse = function doParse(_command)
{
    exports.reset();

    var _cmd = false;

    if(!_command && _command !== false) {_cmd = command}
    else if(_command) {_cmd = _command}

    // First process general information if present
    if(_(argsConfig).has("general"))
    {
        if(_(argsConfig.general).has("usage"))
        {
            _yargs = _yargs.usage(argsConfig.general.usage);
        }

        if(_(argsConfig.general).has("epilog"))
        {
            _yargs = _yargs.epilog(argsConfig.general.epilog);
        }

        if(_(argsConfig.general).has("wrap"))
        {
            _yargs = _yargs.wrap(argsConfig.general.wrap);
        }

        if(_(argsConfig.general).has("strict") && argsConfig.general.strict)
        {
            _yargs = _yargs.strict();
        }

        if(_(argsConfig.general).has("help"))
        {
            _yargs = _yargs.help(argsConfig.general.help.key,
                argsConfig.general.help.desc);
        }

        if(_(argsConfig.general).has("version"))
        {
            _yargs = _yargs.version(argsConfig.general.version.version,
                argsConfig.general.version.key,
                argsConfig.general.version.desc);
        }

        if(_(argsConfig.general).has("helpOnFail"))
        {
            _yargs = _yargs.showHelpOnFail(argsConfig.general.helpOnFail.enable,
                argsConfig.general.helpOnFail.msg);
        }
    }

    // Then process global keys if present
    if(_(argsConfig).has("keys"))
    {
        keyProcess(argsConfig.keys);
    }

    // Now process command and optionally their keys
    if(_(argsConfig).has("commands"))
    {
        // Always load up all the commands but dont override anything except
        // for the selected command if present. If a command is selected
        // erase other loaded commands

        var cmd;

        // Try to select a command
        _.forEach(argsConfig.commands, function(command, index2, commands)
        {
            "use strict";

            // If name matches up with chosen name, save the object
            if(_cmd && command.name === _cmd) {cmd = command}
        });

        // If no command was selected, load in all the commands
        if(!cmd)
        {
            _.forEach(argsConfig.commands, function(command, index2, commands)
            {
                "use strict";

                // Register command
                if(_(command).has("desc"))
                {
                    _yargs = _yargs.command(command.name, command.desc);
                }
                else
                {
                    _yargs = _yargs.command(command.name);
                }
            });
        }
        else
        {
            // If found, begin processing command. Ideally this allows room
            // for sub commands and such but thats over complicating it
            // we'll skip it for now

            // Register just this command
            _yargs = _yargs.command(cmd.name, cmd.desc);

            // Redefine usage if present
            if(_(cmd).has("usage"))
            {
                _yargs = _yargs.usage(cmd.usage);
            }

            // Set examples if present
            if(_(cmd).has("examples"))
            {
                _.forEach(cmd.examples, function(example, index2, examples)
                {
                    "use strict";

                    _yargs = _yargs.example(cmd.name, example);
                });
            }

            // Override global keys or create new keys if present
            if(_(cmd).has("keys"))
            {
                keyProcess(cmd.keys);
            }
        }
    }

    return _yargs.argv;
};

exports.argv = _yargs.argv;
