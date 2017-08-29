/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

import * as webpackMerge from 'webpack-merge'; // used to merge webpack configs
import * as webpack from 'webpack';
import * as helpers from './helpers';
import * as NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin';

/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

import * as commonConfig from './webpack.common'; // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const METADATA = webpackConditionals.METADATA;
const AOT = webpackConditionals.AOT;
const outputDir = helpers.paths.outputDir;
let webpackConfig: webpack.Configuration;

/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

/* This configuration mode does not output any assets. All assets are served from webpack-dev-server's memory. Allows debugging of development code using webpack-dev-server with Hot Module Replacement.*/

// function webpackConfig(options: EnvOptions = {}): configuration {
webpackConfig = webpackMerge(commonConfig, {

   // return webpackMerge(commonConfig, {
   cache: true,

   /**
    * Developer tool to enhance debugging
    *
    * See: http://webpack.github.io/docs/configuration.html#devtool
    * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    */

   // devtool: 'eval',
   devtool: 'cheap-module-source-map',

   /**
    * Options affecting the output of the compilation.
    *
    * See: http://webpack.github.io/docs/configuration.html#output
    */
   output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: helpers.root(outputDir),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: 'js/[name].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: 'js/maps/[name].map',

      /** The filename of non-entry chunks as relative Path
       * inside the output.Path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: 'js/chunks/[name].chunk.js',

      /**
       * publicPath is where you want Webpack-dev-server to make requests for assets.
       * For example, when running webpack-dev-server on a different port than your main app
       */

      // must end in a trailing forward slash or assets cannot be requested
      publicPath: 'http://' + METADATA.host + ':' + METADATA.devserverport + '/'

   },

   plugins: [

      /**
       * Plugin: NamedModulesPlugin (experimental)
       * Description: Uses file names as module name.
       *
       * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
       */
      new NamedModulesPlugin(),

   ], // end plugins

   /**
    * Webpack Development Server configuration
    * Description: The webpack-dev-server is a little node.js Express server.
    * The server emits information about the compilation state to the client,
    * which reacts to those events.
    *
    * These options can be used in combination with the CLI (Command line interface) flags.
    * However, they may conflict, so be careful. Also, some options only work on the CLI, not in
    * the config here.
    *
    * See: https://github.com/webpack/docs/wiki/webpack-dev-server#hot-module-replacement
    * See: https://github.com/webpack/docs/wiki/webpack-dev-server#webpack-dev-server-cli
    * See: https://webpack.github.io/docs/webpack-dev-server.html
    */
   devServer: {
      contentBase : helpers.root(outputDir),
      port        : METADATA.devserverport,
      host        : METADATA.host,
      compress    : true, // Set this if you want to enable gzip compression for assets
      // headers     : { 'Access-Control-Allow-Origin': 'http://' + METADATA.host + ':' + METADATA.webserverport },
      headers     : { 'Access-Control-Allow-Origin': '*' },
      watchOptions: {
         aggregateTimeout: 300,
         poll            : 1000 // very important, makes it so that Webpack Dev Server Hot Module Replacement works without delay
      },
      stats       : {
         colors      : true,
         errors      : true,
         errorDetails: true,
         reasons     : false,
         publicPath  : false,
         version     : true,
         timings     : true,
         modules     : false,
         assets      : true,
         source      : false,
         children    : false,
         hash        : false,
         chunks      : false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
         warnings    : true

         // All webpack.stats options and descriptions
         // // Add asset Information
         // assets: false,
         //
         // // Sort assets by a field
         // assetsSort: "field",
         //
         // // Add information about cached (not built) modules
         // cached: false,
         //
         // // Show cached assets (setting this to `false` only shows emitted files)
         // cachedAssets: false,
         //
         // // Add children information
         // children: false,
         //
         // // Add chunk information (setting this to `false` allows for a less verbose output)
         // chunks: false,
         //
         // // Add built modules information to chunk information
         // chunkModules: false,
         //
         // // Add the origins of chunks and chunk merging info
         // chunkOrigins: false,
         //
         // // Sort the chunks by a field
         // chunksSort: "field",
         //
         // // Context directory for request shortening
         // context: "../src/",
         //
         // // `webpack --colors` equivalent
         // colors: true,
         //
         // // Display the distance from the entry point for each module
         // depth: false,
         //
         // // Display the entry points with the corresponding bundles
         // entrypoints: false,
         //
         // // Add errors
         // errors: true,
         //
         // // Add details to errors (like resolving log)
         // errorDetails: true,
         //
         // // Exclude modules which match one of the given strings or regular expressions
         // exclude: [],
         //
         // // Add the hash of the compilation
         // hash: true,
         //
         // // Set the maximum number of modules to be shown
         // maxModules: 15,
         //
         // // Add built modules information
         // modules: false,
         //
         // // Sort the modules by a field
         // modulesSort: "field",
         //
         // // Show performance hint when file size exceeds `performance.maxAssetSize`
         // performance: true,
         //
         // // Show the exports of the modules
         // providedExports: false,
         //
         // // Add public path information
         // publicPath: false,
         //
         // // Add information about the reasons why modules are included
         // reasons: false,
         //
         // // Add the source code of modules
         // source: false,
         //
         // // Add timing information
         // timings: true,
         //
         // // Show which exports of a module are used
         // usedExports: false,
         //
         // // Add webpack version information
         // version: true,
         //
         // // Add warnings
         // warnings: false
      }

   },

   /*
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
   node: {
      global        : true,
      crypto        : "empty",
      process       : true,
      module        : false,
      clearImmediate: false,
      setImmediate  : false
   }

});
// }

// Export
module.exports = webpackConfig;
