## My Personal Website

This is my personal website, I'm a open source enthusiast and big Git fan so why not on Github.

### About this project

---

This project is a GPLv3 Affero Licensed Open Source Personal Testbed Website for
experimenting in new cutting edge technology.

Also, I have a lot of Javascript files simply because I want them in my website
and love to leverage lots of libraries.

### Contributing

---

I do welcome contributions, its obviously not really a "Project" per-se but if you
want to correct any mistakes or add any new features your welcome to.

To add any contributions, simply fork, make the changes you want, and send a pull request.

### Requirements for building

---

The goal is to leverage many kinds of open source software yet
keep development requirements and required software installs
down to a minimal.

Right now you need to install these software beforehand

    NodeJS
        npm

If your on linux you maybe missing a required library file and/or
missing a required symlink

This command may need to be executed if your running into
bower install issues

    ln -s /usr/bin/nodejs /usr/bin/node

__SASS Removed__:

While the goal may be to leverage many kinds of open source applications
its not to make the developers job difficult to do in setting up the
environment

SASS has a dependency on Ruby, Bundler, Gems, and Compass being setup correctly
and up-to-date. While all of it is powerful, its also clunky and sometimes
difficult to set up. This is especially true for automated software like Jenkins.
Ideally everything should entirely be managed purely from NodeJS, and NodeJS alone.

SASS was kept around anyways because it was required for a custom Bootstrap
styling and LESS was undesired. Now that Stylus is heavily trending, arguably more
powerful, and totally managed from NodeJS alone with one package installation and
since Bootstrap now has a Stylus port with a good number of very active contributors.

SASS, Bundler, Gems, and Compass requirements will be removed thus eliminating
all requirements on the host machine except NodeJS alone.

### Gulp Build & General Workflow

---

The Gulpfile has gone through tremendous changes throughout my different projects.
It's been re-written from scratch dozens of times. The latest re-write was one of the
largest scale re-writes and incorporated an incredibly new and faster build style as well.

The new workflow is mentioned below

#### Pre-Setup

Install the dependencies with this command

    npm install
    bower install

Then ensure the libraries are precompiled or nothing will work correctly. This takes the Javascript and
CSS of all the applicable NPM and Bower packages, concatenates them, and places them in the generated folder.

**If this step isn't done then no libraries will be integrated into the build**

    gulp Precompile

#### Folders and Files

**Scripts and Styles**

The ```scripts``` folder will take Javascript (.js) and Typescript (.ts). The ```styles```
folder will take CSS (.css) and Stylus (.styl).

These scripts and styles will be copied or compiled over to a generated directory where
they will also undergo concatenation and minification.

The generated directory is not meant to be touched except by gulp, and all generated files, as well as
the original files and the concatenated and minified can be accessed individually or all-together.

Also note that even though Javascript and CSS needs no compilation, it still
needs to be copied over to the generated directory for minification and
concatenation. The scripts and styles directory themselves won't be looked at
for that.

**Other Files**

Other files will not be touched and are accessed as-is and as laid out.

**Manifest**

To cache the site offline, this makes uses of HTML5's manifest, the manifest is managed
automatically by gulp as part of the build process.

* Only the minified js and css builds are included in the cache. This makes it
useful for LiveReload to work in development mode byapssing the cache and
keeping production only files in the cache making it smaller.

* Media is cached as well but only the files in the offline sub-folder.

* All fonts in the ```generated/fonts``` folder are cached but to get
them in the folder you must use  ```gulp Precompile``` or ```gulp
Precompile:Fonts```.

* The partials directory is also included in the cache.

These optimizations help keep the cache as small as possible

#### LiveReload

LiveReload is used throughout Gulp and will only startup on ```gulp Watch```.
Also full page reloads will only reload the development page not the
production page.

LiveReload and HTML5 Manifest are structured in a way where they won't
conflict with each other. The development page uses files outside the HTML5
cache, this is the page that LiveReload also reloads. The production page
uses files that are inside the HTML5 cache, this is the page that LiveReload
won't touch even if enabled in the browser.

#### Gulp

**Precompilation**

To take all the used Javascript and CSS from NPM and Bower packages and place
them in a single file to be included in concatenation, precompile them. Without
this command, no libraries will be included.

    gulp Precompile:Scripts
    gulp Precompile:Styles
    gulp Precompile:Fonts

or just issue this command to run all of them

    gulp Precompile

**Scripts**

To directly copy over the Javascript files issue this command

    gulp Prep:Javascript

To compile Typescript over to the generated folder

    gulp Prep:Typescript

To minify and concatenate all compiled and native scripts use this command.
It also will run ```Prep:Typescript```

    gulp Prep:Scripts

**Styles**

To directly copy over the CSS files issue this command

    gulp Prep:CSS

To compile Stylus over to the generated folder

    gulp Prep:Stylus

To minify and concatenate compiled and native styles use this command.
It also will run ```Prep:Stylus```

    gulp Prep:Styles

**Manifest**

To create the manifest, run this command. The manifest essentially does a
full build running all of the usual build commands except precompilation
as that should only run once.

    gulp Build:Manifest

Since it runs the usual build commands, its also aliased to

    gulp Build

and linked to the default command, so you can also run this

    gulp

There does exist a command to only build the manifest, not any other build
steps. Use if desired for a unique case.

    gulp Build:ManifestOnly

**Watching**

To enable gulp's watch mode, use this command. Keep in mind that since the final outcome
depends on a chain of build events, it may not just run one task. Watch also activates LiveReload
if its enabled and installed on the browser.

    gulp Watch

**Cleaning up**

Most everything is placed in the generated folder, minified and concatenated styles and scripts as well as the manifest
are placed in the root folder for easiness. Therefor it makes it easy to delete by hand, but obviously we have gulp
to automate all of that for you.

This command removes all Javascript, CSS, or font files from the generated folder respectively. This **WILL** remove
the precompiled files as well.

    gulp Clean:GeneratedCSS
    gulp Clean:GeneratedJS
    gulp Clean:GeneratedFonts

To remove only the Precompiled files use these commands

    gulp Clean:PrecompiledJS
    gulp Clean:PrecompiledCSS

or just this command

    gulp Clean:Precompiled

To remove the entire generated folder use this comamnd. Keep in mind
that about 5 files are generated outside of this folder for easiness and thus
won't be deleted with this command.

This **WILL** remove the precompiled files as well.

    gulp Clean:Generated

Removing the concatenated and minified files is also easy

    gulp Clean:JSBuild
    gulp Clean:CSSBuild

To remove the manifest use this

    gulp Clean:Manifest

To just remove all generated **and precompiled files** use this command

    gulp Clean:All

or just to be even simpler

    gulp Clean

### Technology

---

This project leverages several open-source technology, they are as
follows.

__List out-of-date__.

#### Software and Templates
    Initial Template and Layout by HTML5 Boilerplate
	Git
    Bower
    NodeJS
    Gulp

#### Languages
	Ruby
	WebStack
	    HTML5
        CSS3
        Javascript/Ecmascript 5

#### Langauge Sub-Set
    Stylus
    Typescript

#### Frameworks
    jQuery
        Swipe
        FitText
        Gridster
        Knob
        Lettering
        Parallax
        Stellar
        Tooltipster
	Bootstrap
    Angular
        Animate
        Cookies
        Loader
        Messages
        Mocks
        Resources
        Sanitize
        Scenario
        Touch
    CreateJS
        TeeenJS
        EaselJS
        PreloadJS
        SoundJS
    D3
    Kinetic
    MovieClip
    QooxDoo
    Three
    Unslider

#### Testing
    Modernizr

#### Other
	FontAwesome
    IcoMoon Fonts
