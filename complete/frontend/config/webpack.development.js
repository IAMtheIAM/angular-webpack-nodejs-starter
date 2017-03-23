/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
const webpack = require('webpack');
const helpers = require('./helpers');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const DllBundlesPlugin = require('../node_modules_custom/webpack-dll-bundles-plugin').DllBundlesPlugin;
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*********************************************************************************************
 *******************************  Webpack Constants/Vars *************************************
 ********************************************************************************************/

const outputDir = 'wwwroot';

/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const AOT = webpackConditionals.AOT;
const JIT = webpackConditionals.JIT;
const DEBUG = webpackConditionals.DEBUG;
const ENV = webpackConditionals.ENV;
const PRODUCTION = webpackConditionals.PRODUCTION;
const METADATA = webpackConditionals.METADATA;

/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

module.exports = webpackMerge(commonConfig,
   {
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

         /* publicPath is where you want Webpack to make requests for assets.
          * For example, when running webpack-dev-server on a different port than your main app
          *
          */

         // must end in a trailing forward slash or assets cannot be requested
         publicPath: 'http://' + METADATA.host + ':' + METADATA.port + '/'

      },

      plugins: [


         /**
          * Plugin: NamedModulesPlugin (experimental)
          * Description: Uses file names as module name.
          *
          * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
          */
         new NamedModulesPlugin(),

         /**
          * Plugin: DashboardPlugin
          * Description: View progress.
          * `'It's like to work at NASA.'`
          *
          * See: https://github.com/FormidableLabs/webpack-dashboard
          */
         // new DashboardPlugin(),

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
         port: METADATA.port,
         host: METADATA.host,
         compress: true, // Set this if you want to enable gzip compression for assets
         headers: {'Access-Control-Allow-Origin': 'http://' + METADATA.host + ':' + METADATA.dotnetport},
         watchOptions: {
            aggregateTimeout: 300,
            poll: 1000 // very important, makes it so that Webpack Dev Server Hot Module Replacement works without delay
         },
         stats: {
            colors: true,
            errors: true,
            errorDetails: false,
            reasons: true,
            publicPath: false,
            version: true,
            timings: true,
            assets: false,
            modules: false,
            source: true,
            children: true,
            hash: false,
            chunks: false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
            warnings: false
         }

      },

      /*
       * Include polyfills or mocks for various node stuff
       * Description: Node configuration
       *
       * See: https://webpack.github.io/docs/configuration.html#node
       */
      node: {
         global: true,
         crypto: "empty",
         process: true,
         module: false,
         clearImmediate: false,
         setImmediate: false
      }

   });
