
# ASP.Net Core 1.0 + Angular2 Webpack Starter
### Integrated with Visual Studio 2015 and TFS Build Server

> **Customized Documentation for the new Helios App, by Nathaniel Parson. ARMLS Devs may contact me at 480-382-7107 for help on this project. I will try to answer questions if I am still available for help.**


This is the documentation for our starter template. It is based on the Angular2 Webpack Starter repo [available on GitHub](https://angularclass.github.io/angular2-webpack-starter/). The original documentation is here in this file below the customized documentation. This documentation assumes you are developing on Windows 10.


In the next section, you'll learn what you need to know in order to build, serve, and edit this app.

## Getting Your Environment Setup

This solution depends upon NodeJS and NPM. It is important that you only use Node version 4.4.4 LTS or higher. Do not use the "Current" version which contains latest features, or you may run into build errors. Any verion of Node LTS below 4.4.4 is not guaranteed to work and may also produce build errors.

**Installation steps:**

* Close visual studio.

* **Uninstall** any version of NodeJS you have currently.

* Navigate to the folder at: **(Solution Root)/ProgramDependencies/**

* First install the Visual Studio extension "**NPM Task Runner v1.3.59.vsix**". This enables you to see the NPM scripts in a new window pane called Task Runner Explorer. 

* Next install "**node-v4.4.4-x64.msi**". Make sure to leave the "Add to PATH" checked during install.

* Reopen Visual Studio and launch the solution. The first time opening the solution will take 3-5 minutes to install all of the node_modules and bower_components depencencies.

* Once it finishes, all dependencies have been restored and you can begin developing. 

* Choose "Web" on the dropdown where you launch the application. This launches the application using the new Kestrel .NET cross platform web server. The app will not run if you use the default "IIS Express". **The app is running on http://localhost:5000. The webpack-dev-server is running on http://localhost:4000** which serves the assets to the main .NET server on port 5000.


**Important points of consideration**


* Every time you open the solution, visual studio will execute the `projectlaunch` script because it is bound to the "project open" binding inside the Task Runner Explorer window. This script will install all dependencies, remove the version of NodeJS which comes with Visual Studio 2015, delete wwwroot, generate a new webpack bundle which outputs to wwwroot, and launch the webpack-dev-server running on port 4000. It is critical that the script properly executes in order to build properly. 

* If you have trouble with NPM build errors, check to see if the `remove-web-tools` task is succeeding. There is a folder inside Visual Studio installation directory, located at *%ProgramFiles(x86)%/Microsoft Visual Studio 14.0/Common7/IDE/Extensions/Microsoft/Web Tools/External* which contains prebundled versions of Node, NPM, bower, and a few others. These versions are outdated and usually fail to build when executing these scripts. The "remove-web-tools" task renames the folder where these programs are contained from "External" to "External_DISABLED" which causes Visual Studio to be unable to revolve the location and forces it to look at the global PATH where your newer versions of Node and NPM are installed.

* To see what tasks are running or to execute a new task, simply right click on "package.json" (located in the *project* root) and choose "Task Runner Explorer" to see all NPM scripts. For the future reference, simply double click any task to execute it. (Don't execute any just yet). To see what each task does, open package.json normally and go to the "scripts" section.

* When any project executes, inside Task Runner Explorer there will be a new tab for each task executed. It will say (running) in the tab next to the task name currently executing, such as "projectlaunch (running)". When the task finishes executing, the word (running) will disappear from the tab, indicated the task has finished. 

* During the "projectlaunch" task, once you get the output message of `[default] Ok, 2.694 sec.` all scripts have finished running and you can begin development. However, this script will continue to say "projectlaunch (running)" because the webpack-dev-server does not exit and continues to run. The same is true for the `start` task (which is the final task that "projectlaunch" executes anyway); it will keep running. This is normal, because the webpack-dev-server continues running on port 4000, and you won't be able to develop locally without it. If you accidentally or intentionally need to close the "projectlaunch" task, before you continue developing you will need to execut the `start` script which will fire up the webpack-dev-server again.

* If you ever need to clean your project folder of any generated files, execute the "clean" task. This will remove *"node_modules", "bower_components", "typings", "wwwroot" and "coverage"* from your project directory.

* Alternatively you can execute "clean:install" which will perform the task `clean` followed by the task `install:all` which will reinstall all dependencies from a locally stored cache in the form of a .tar file. This is faster than downloading all the packages from the NPM repository. If you want to clean then redownload all dependencies rather than use local cache, run "clean:install:download" which will perform the tasks `clean` followed by `install:all:download`.

# Features of this Project

## Webpack

<img src="../../Documentation/images/webpack-overview-diagram.png" alt="Webpack Dev Server with Hot Module Replacement" width="900"/>

**For more info on Webpack Hot module Replacement (HMR), see: [Understanding Webpack Hot Module Replacement](http://andrewhfarmer.com/understanding-hmr/).**

This project uses Webpack to bundle all module dependencies into "bundles" of javascript. It is smart and knows how to resolve the dependencies during bundling by reading all the `require("somefile")` and `import { SomethingExported } from 'somewhere'` tags throughout your app. 

## Webpack Dev Server & Hot Module Replacement

In addition to Webpack, there is also a program called Webpack Dev Server (WDS) which runs and enables Hot Module Replacement (HMR). The above diagram explains how it works visually. HMR is a feature which allows you to launch your app, edit the source code, save, and webpack will automatically recompile the TypeScript, SASS, and all dependencies, then notify the Webpack Dev Server that a change happened. 

WDS will then notify the HMR runtime of the change, which is embedded inside the bundle.js loaded on the site. The HMR runtime receives this notification that a changed occured and it requests the new bundles associated with this change from the WDS. WDS then supplies those new "chunks" of code and "hot swaps" them out real-time while the app is running. Hot Module Replacement works for HTML, Javascript/TypeScript, or CSS/SASS/LESS/Whatever changes. 

The benefit of this is that you will not lose your app "state" nor your current app "view" each time you make a change to your source code, thereby allowing rapid development. However, keep in mind that you will likely lose your "local state" if you are working on source code that contains that particular local module. The reason for this is because when you save, webpack "disposes" of the old code and injects the new code to replace it, so any local states derrived from the code being swapped will be lost. 

**To use Hot Module Replacement is easy.**

1. First, make sure your webpack-dev-server is running on port 4000 (meaning either `projectlaunch` or `start` is actively "running" with a final message of `[default] Ok, 2.694 sec.`). 

2. Then, simply make your changes to the source code, press save, and watch the page to see the magic happen. The changes you made will instantly reflect in the app real-time! For more detailed information of what is happening behind the scenes, view your browser's Developer Console for debugging output.

## Adding CSS/SCSS Styles to Angular2 Components With Lazy Loading


My goal was to enable a standard CSS development workflow wherein all styles are "externally" loaded via `<link href="" />` tags rather than embedded/inlined styles via `<style>...</style>` tags in the `<head></head>`. The reason is because using embedded styles causes the source of the style to be hidden from the DevTools inspector. This was a big problem, because the default "Angular2 way" of loading styles within `@Component` results in the styles being embedded in the `<head></head>`, making it very difficult to know which css/scss file is applying the styles to a particular element. See image below.

<img align="right" src="../../Documentation/images/styles-explanation.png" alt="Styles explanation" />

In addition, I wanted Webpack Hot Module Replacement to still work, and because we're using SASS which compiles to CSS, I wanted to see the original .SCSS source-mapped file appear in the DevTools inspector, not the compiled .CSS file. Seeing the compiled .CSS is a step better, but it still forces the developer to have to "backtrack" the compiled .CSS to the original .SCSS. Sourcemaps solves this by directly displaying the original .SCSS source file in the Styles Pane, which you can click on and jump to the exact line in question within the original .SCSS file!

### How I Made It Work

To properly get Hot Module Replacement working with SASS Sourcemaps and externally loaded (not inlined) CSS, we have to load our CSS/SCSS scripts OUTSIDE of the `@Component` decororator within the Angular2 component, NOT inside the `@Component` decorator. 

There is no disadvantage of doing this, nor is there an advantage to loading styles the "Angular2 way". In fact, the only thing that happens when loading styles the "Angular2 way" is that all styles are "inlined" within the `<head></head>` tag by default as a new `<style>...</style>` tag, and therefore SASS sourcemaps don't work, and neither does Hot Module Replacement.

Another benefit is that loading styles this way enables so-called "Lazy Loading" of CSS/SCSS files "on demand" as the app views need them. Rather than loading up ALL of the entire app's styles at the initial app view when they are not even required (whether that's one giant externally loaded .CSS file or a large chunk of "embedded" styles), we can prevent this unnecessary cost on bandwidth and load time, and only load the exact styles each view needs, exactly when that view is loaded.

**Summary:** Do NOT add styles the "Angular2 Way" in the `@Component` decorator. That means do not add the `styles:` nor `styleUrls:` properties to the `@Component` decorators. You can simply require your SASS file directly above the `@Component` decorator with `require('./my.scss')`. 

**NOTE:** Make sure to include the correct path to the .SCSS file. By default, each component's TypeScript, HTML, and SASS all live together in the same folder. Now, webpack will automatically compile the SASS to CSS and append a `<link href="[hash-of]-my.scss" />` tag to the bottom of the `<head></head>`, which perfectly enables Hot Module Replacement, SASS Source Maps which clearly indicate the filename, and "Lazy-Loading" of styles on demand!

## NPM Scripting

**See [How To Use NPM As A Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
and [Why We Should Stop Using Grunt & Gulp](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/).**

NPM (Node Package Manager) is more than just a package manager. It is also a very robust Task Runner.

Instead of using Gulp, Grunt, Broccoli or any of the other Task Runners, I have opted to use NPM scripting for simplicity and time saving. Rather than having to write complex Gulp tasks or Grunt json, we can write simple NPM scripts in the form of Commands to the Command Line Interface (CLI), cmd.exe. Any command you could write on the Command Line, you can write as an NPM script. See package.json for examples. 

Every script has a `pre` and `post` version of it. For example, the task "projectlaunch" has a task called `preprojectlaunch` which will execute BEFORE `projectlaunch` will, even though we called "projectlaunch" first. Likewise, "postprojectlaunch" will execute AFTER `preprojectlaunch` and `projectlaunch`, in this order respectively. In this manner you can create complex chains of events will absolute ease. You also can use any native binary available to your local machine by either adding it to your global PATH or by changing your current working directory before executing a task with `cd C:/GoToThisFolder`. 

To run a task within another task, use "npm run (taskname)" where (taskname) is the name of another NPM script. 

To chain commands together on a single task without using `pre` or `post`, use the `&&` combiner. For example: `npm run clean && npm run install:all`. This will first run the `clean` task and once that task exits with code 0, it will run the `install:all` task.

NPM utilizing exit codes to indicate whether the executing task failed or succeeded. Exit code 0 is a success. Any non-zero exit code is a failure and will halt the scripting process, preventing any future scripts from running. You can debug the cause of the error by checking the NPM Task Runner Explorer console output. Each task you execute within NPM Task Runner Explorer is an instance of a new cmd.exe process running. Multiple tasks can run simultaneously if you double click on more than one.

**CAVEAT**: When chaining scripts together with `pre`, `post` or `&&`, they are all run **synchronously**, meaning that they happen sequentially in order, and if one fails, the rest will not execute. Therefore it is imperitive that all your scripts being executed issue an exit code 0 in order to continue scripting. 

**CAVEAT 2**: Webpack-Dev-Server is an ongoing task and does NOT have an exit code, because it stays alive. Therefore you cannot chain any tasks after running Webpack-Dev-Server without utilizing a workaround to get them to run **asynchronously**. There are also other NPM pacakges such as `concurrently` that can help with this, and command line tools such as chaining commands together with a single `&` and prefixing them with `start` to open each command in a new cmd.exe instance and run them in parallel).(`start npm run server:Frontend:hmr & start npm run apiserver`). 

## Integration with Local Build and TFS Build Server

In order to integrate the NPM scripts with your local Visual Studio build and on a remote build server, it is necessary to take advantage of the *.xproj file. This is the project file. To edit this within Visual Studio, go to Solution Manager and right click on your project name, then choose "Unload Project." Now right click on the project file again and chooose "Edit *.xproj". Alternatively you can navigate in File Explorer to "(Solution Root)/src/starterproject" and edit StarterProject.xproj with Notepad++ or any text editor. 

**Inside StarterProject.xproj, The section you are concerned with is:**

```
  <PropertyGroup>
    <CompileDependsOn>
      $(CompileDependsOn);
	  PreBuildEvents
    </CompileDependsOn>
    <CleanDependsOn>
      $(CleanDependsOn); 
      NpmClean
    </CleanDependsOn>
    <BuildDependsOn>
      $(BuildDependsOn);
	  PostBuildEvents
    </BuildDependsOn>
  </PropertyGroup>
  <Target Name="PreBuildEvents">
    <Exec Command="set NODE_ENV=$(ConfigurationName)" />
	<Exec Command="npm run launch:$(ConfigurationName)" />
  </Target>
  <Target Name="NpmClean">
    <Exec Command="set NODE_ENV=$(ConfigurationName)" />
    <Exec Command="npm run cleancache" />
  </Target>
  <Target Name="PostBuildEvents">
    <Exec Command="set NODE_ENV=$(ConfigurationName)" />
  </Target>
```

PropertyGroup has a property called CompileDependsOn. First, it executes $(CompileDependsOn), which is a reference to execute all preconfigured compile events for visual studio. Then, it proceeds to execute PreBuildEvents, which points to the Target named "PreBuildEvents". 

**Within this target is where we execute 2 commands:**

* The first command sets the current build configuration to the NODE_ENV variable (used throughout WebPack and other scripts), so webpack can hook into this and know which scripts to execute based on our build configuration.
* The second command is the one that hooks into our NPM Scripts, and fires **npm run launch:$(ConfigurationName)** where *$(ConfigurationName)* is a variable whos value is equal to the current "build configuration". These NPM scripts hook into the various `build:` scripts

Because of this section in the *.xproj file, Visual Studio and TFS will execute the NPM scripts BEFORE the C# build happens both locally and on the TFS build server.

Your current build configuration is whatever you have chosen under the dropdown one box left from the "Any CPU" box. 

**Your available build configurations are:**

1. **Debug**: This is for C# developers. It will not execute *any* npm scripts nor webpack, and will use the exiting files in wwwroot to launch the app. Fastest build time.
2. **FrontEnd**: This is for FrontEnd developers and anyone making changes to the front end web application. It will execute the npm script `build:FrontEnd` which first wipes out wwwroot, then it launches webpack based on the **webpack.development.js** configuration. Webpack then recompiles and bundles our assets, and spits them into wwwroot.
3. **Release**: This is to emulate what the build server does when it builds the code you check in. This does the same as FrontEnd, except it executes `build:Release` which launches webpack based on the **webpack.production.js** configuration.
4. **Tests-E2E**: NOT WORKING. This kicks off the End to End tests by Protractor. These tests are defined in the files called `*.e2e.ts`. Currently it does not work unless you have your .NET Kestrel Web Server and Webpack Dev Server simultaneously running PRIOR to starting the test, because it launches the app in an actual browser and runs through the post-compiled source code in wwwroot (exactly what your browser sees). To get this working, make sure your Webpack-Dev-Server is running (from either `projectlaunch` or `start`), and then start your .NET server using the "FrontEnd" release configuration. Then go to NPM Task Runner Explorer and execute the task `test:e2e`. Protractor will run through the tests now.
5. **Tests-Unit**: This kicks off the Unit tests by Karma. It uses a headless browser and runs through the pre-compiled source code in "/src", or more specifically "(Project Root)/src/starterproject/src". These tests are defined in the files called `*.spec.ts`. Alternatively, you can launch this test from NPM Task Runner Explorer also by executing the task `test:karma`. No servers need to be running for Karma to execute properly.

## Injecting Webpack-Generated Bundles Into Your .NET Application Root 

 Webpack produces bundles which are created from the `module.exports.entry` point specification in *config/webpack.common.js*. So if 3 entry points are specified, Webpack will produce 3 bundles with unique hashtags in the filename, such as `polyfills.bundle.js?89e2f2fbfde15299ecb3`. Webpack will then use HtmlWebpackPlugin to inject these uniquely named bundles into the application entry point file, which specified by the HtmlWebpackPlugin property, `template: 'src/_Layout.cshtml'`. The final generated output for this application entry point file lives in *wwwroot/_Layout.cshtml* with the rest of Webpacks generated files. Also, depending on your release configuration, the `host` for the bundle changes to either `http://localhost:4000/polyfills.bundle.js?[hash]` (development) or `/polyfills.[hash].bundle.js?[hash]` (production).

This was a problem for the .NET server because it does not boostrap the .NET app from within wwwroot. Instead, it loads the file located at *Views/Shared/_Layout.cshtml*, which is outside of the output directory that webpack spits files into, therefore by default it does **not** have the unique bundles injected into it. The path to the generated javascript bundles could not be hardcoded here either since the name changes each time Webpack builds. And because Webpack cannot output one file to a seperate output directory than the rest of the build, the solution was to copy the generated sfile from *wwwroot/_Layout.cshtml* (which contains those injected bundles), to the default location *Views/Shared/_Layout.cshtml*.

### Editing _Layout.cshtml

**Bottom Line:** If you need to edit *Views/Shared/_Layout.cshtml*, all edits must be made on the **source** of this file which is located at *src/_Layout.cshtml*, or they will not be reflected in the application. Every time webpack generates a new complete build, it first uses the source file at *src/_Layout.cshtml* to generate the output file which gets spit into *wwwroot/_Layout.cshtml*.  Then the NPM tasks `postbuild:FrontEnd` and `postbuild:Release` copy the generated file from *wwwroot/_Layout.cshtml* to the default .NET location at *Views/Shared/_Layout.cshtml*. If you make any changes directly to *Views/Shared/_Layout.cshtml*, your changes will be **overwritten** each time webpack creates a new bundle.

#
# Original Documentation 
## (from GitHub repo)



[![taylor swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen) [![GitHub version](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter.svg)](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter) [![Dependency Status](https://david-dm.org/angularclass/angular2-webpack-starter.svg)](https://david-dm.org/angularclass/angular2-webpack-starter)
[![Issue Stats](http://issuestats.com/github/angularclass/angular2-webpack-starter/badge/pr?style=flat)](http://issuestats.com/github/angularclass/angular2-webpack-starter)
[![Issue Stats](http://issuestats.com/github/angularclass/angular2-webpack-starter/badge/issue?style=flat)](http://issuestats.com/github/angularclass/angular2-webpack-starter) [![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/angularclass/angular-2-webpack-starter)

<p align="center">
  <a href="https://angularclass.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9863762/a84fed4a-5af7-11e5-9dde-d5da01e797e7.png" alt="Webpack and Angular 2" width="500" height="320"/>
  </a>
</p>


# Angular2 Webpack Starter [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/angular2-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/angular2-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> An Angular 2 starter kit featuring [Angular 2](https://angular.io) ([Router](https://angular.io/docs/js/latest/api/router/), [Forms](https://angular.io/docs/js/latest/api/forms/),
[Http](https://angular.io/docs/js/latest/api/http/),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/js/latest/api/test/), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Material](https://github.com/angular/material2), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [Typings](https://github.com/typings/typings), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack](http://webpack.github.io/) by [AngularClass](https://angularclass.com).

> If you're looking for Angular 1.x please use [NG6-starter](https://github.com/angularclass/NG6-starter)

> If you're looking to learn about Webpack and ES6 Build Tools check out [ES6-build-tools](https://github.com/AngularClass/ES6-build-tools)

> If you're looking to learn TypeScript see [TypeStrong/learn-typescript](https://github.com/TypeStrong/learn-typescript)

> If you're looking for Webpack 2 version then see the experimental version [angular2-webpack2-starter](https://github.com/gdi2290/angular2-webpack2-starter) that will be merged

> If you're looking for something easier to get started with then see the offical angular2-seed that I also maintain [angular/angular2-seed](https://github.com/angular/angular2-seed)

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast. Using a [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for Angular 2.
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular 2 code using Protractor.
* Type manager with Typings
* Hot Module Replacement with Webpack
* Material Design with [angular/material2](https://github.com/angular/material2)

### Quick start
**Make sure you have Node version >= 4.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/angularclass/angular2-webpack-starter.git

# change directory to our repo
cd angular2-webpack-starter

# add required global libraries
npm install typings webpack-dev-server rimraf webpack -g

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [Typings](#typings)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──human.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * our typings manager
 └──package.json               * what npm uses to manage it's dependencies
```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `typings install` to install necessary typings
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# Typings
> When you include a module that doesn't include Type Definitions inside of the module you need to include external Type Definitions with Typings

## Use latest Typings module
```
npm install --global typings
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with typings

```
typings install node --save
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

You can include your type definitions in this file until you create one for the typings registry
see [typings/registry](https://github.com/typings/registry)

# Frequently asked questions
* What's the current browser support for Angular 2 Beta?
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* How do I run protractor with node 0.12.x?
  * please check out this repo to use the old version of protractor [#146](https://github.com/AngularClass/angular2-webpack-starter/pull/146/files)
* Where do I write my tests?
  * You can write your tests next to your component files. See [`/src/app/home/home.spec.ts`](/src/app/home/home.spec.ts)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How to use `sass` for css?
 * `loaders: ['raw-loader','sass-loader']` and `@Component({ styles: [ require('./filename.scss') ] })` see issue [#136](https://github.com/AngularClass/angular2-webpack-starter/issues/136)
* How do I test a Service?
 * See issue [#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
 * The VS Code chrome debug extension support can be done via `launch.json` see issue [#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
 * You need to use `0.0.0.0` so revert these changes [#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* What are the naming conventions for Angular 2?
 * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I include bootstrap or jQuery?
 * please see issue [#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* I'm getting an error about not finding my module that I installed?
 * please see [How to include or create custom type definitions](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-or-create-custom-type-definitions) and [custom-typings.d.ts](https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/custom-typings.d.ts)
* How do I async load a component?
 * see wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute)
* Error: Cannot find module 'tapable'
 * Remove `node_modules/` and run `npm cache clean` then `npm install`
* What about Webpack 2?
 * If you're looking for Webpack 2 version then see the [experimental version](https://github.com/gdi2290/angular2-webpack2-starter) that will be merged soon.
* How do I turn on Hot Module Replacement
 * Run `npm run server:dev:hmr`
* `RangeError: Maximum call stack size exceeded`
 * This is a problem with minifying Angular 2 and it's recent JIT templates. If you set `mangle` to `false` then you should be good.
* Why is the size of my app larger in development?
 * We are using inline source-maps and hot module replacement which will increase the bundle size.
* If you're in China
 * check out https://github.com/cnpm/cnpm

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular 2

* [Chat: AngularClass.slack](http://angularclass.com/member-join/)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)
* [Gitter: AngularClass/angular2-webpack-starter](https://gitter.im/angularclass/angular2-webpack-starter)

# Quick Start Guides

## Nitrous

You can quickly create a free development environment to get started using this
starter kit in the cloud on [Nitrous](https://www.nitrous.io/):

<a href="https://www.nitrous.io/quickstart?repo=https://github.com/nitrous-io/angular2-webpack-starter">
  <img src="https://nitrous-image-icons.s3.amazonaws.com/quickstart.png" alt="Nitrous Quickstart" width=142 height=34>
</a>

Simply run `HOST=0.0.0.0 npm start` from the terminal inside of
`~/code/angular2-webpack-starter` and access your site via the "Preview > 3000"
link in the IDE.
___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com

# License
 [MIT](/LICENSE)
