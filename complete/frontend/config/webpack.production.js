/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

const helpers = require('./helpers.js');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('../node_modules_custom/purifycss-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

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

module.exports = webpackMerge(commonConfig, {

   /**
    * Developer tool to enhance debugging
    *
    * See: http://webpack.github.io/docs/configuration.html#devtool
    * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    */
   // devtool: false,
   // devtool: 'cheap-module-source-map',
   devtool: 'source-map',

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

      /**
       * The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: 'js/chunks/[name].chunk.js',

   },

   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */
   plugins: [


      /**
       * Webpack plugin to optimize a JavaScript file for faster initial load
       * by wrapping eagerly-invoked functions.
       *
       * See: https://github.com/vigneshshanmugam/optimize-js-plugin
       */

      new OptimizeJsPlugin({
         sourceMap: false // prod
      }),


      /**
       * Plugin: ExtractTextPlugin
       * Description: Extract SCSS/CSS from bundle into external .css file
       *
       * See: https://github.com/webpack/extract-text-webpack-plugin
       */
      new ExtractTextPlugin({
         filename: '/css/[name].style.css?[hash]',
         disable: false,
         allChunks: true
      }),

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
      new DefinePlugin({
         'ENV': JSON.stringify(METADATA.ENV),
         'HMR': METADATA.HMR,
         'process.env': {
            'ENV': JSON.stringify(METADATA.ENV),
            'NODE_ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR,
         }
      }),

      /**
       * Plugin: PurifyCSS WebPack Plugin
       * Description: This is a plugin for WebPack that utilizes PurifyCSS to clean your CSS. Its dead simple, but it requires you to be prepared.
       *
       * See: https://github.com/purifycss/purifycss-webpack-plugin
       */

      new PurifyCSSPlugin({
         basePath: helpers.paths.root,
         paths: [
            "/src/app-components/**/*.template.html",
            "/src/app-components/**/*.component.ts",
         ],
         resolveExtensions: ['.html'],
         purifyOptions: {
            minify: true,
            info: true,
            // output: 'wwwroot/css/purified',
            output: helpers.root(outputDir) + '/css/purified',
            rejected: false,
            whitelist: // KendoUI for jQuery - classes that are programatically added to DOM, therefore must be whitelisted since they cannot be evaluated during compile-time
            // '*selector*' means any class which contains that selector.

               ["*gridcell*", "*k-alt*", "*k-auto-scrollable*", "*k-button*", "*k-button-icontext*", "*k-current-page*", "*k-delete*", "*k-edit*", "*k-editable*", "*k-filter-row*", "*k-floatwrap*", "*k-grid*", "*k-grid-content*", "*k-grid-edit*", "*k-grid-header*", "*k-grid-header-wrap*", "*k-grid-pager*", "*k-grid-toolbar*", "*k-grouping-header*", "*k-header*", "*k-i-arrow-e*", "*k-i-arrow-w*", "*k-i-seek-e*", "*k-i-seek-w*", "*k-icon*", "*k-minus*", "*k-plus*", "*k-label*", "*k-link*", "*k-pager-first*", "*k-pager-info*", "*k-pager-last*", "*k-pager-nav*", "*k-pager-nav*", "*k-pager-numbers*", "*k-pager-wrap*", "*k-reset*", "*k-state-disabled*", "*k-state-selected*", "*k-widget*", "*kendoUI*", "*k-widget*", "*k-numerictextbox*", "*k-numeric-wrap*", "*k-state-default*",
                  "*k-formatted-value*", "*k-input*", "*k-select*", "*k-textbox*", "*k-cancel*",
                  "*k-grid-cancel*", "*k-grid-update*", "*k-state-hover*", "*caret*", "*collapsible*", "*collapsible-header*", "*collapsible-body*", "*active*", "*mdi-navigation-arrow-drop-down*"]

         }
      }),


      /**
       * Plugin: WebpackMd5Hash
       * Description: Plugin to replace a standard webpack chunkhash with md5.
       *
       * See: https://www.npmjs.com/package/webpack-md5-hash
       */
      new WebpackMd5Hash(),

      /**
       * Plugin: DedupePlugin
       * Description: Prevents the inclusion of duplicate code into your bundle
       * and instead applies a copy of the function at runtime.
       *
       * See: https://github.com/webpack/docs/wiki/optimization#deduplication
       */
      // new webpack.DedupePlugin(),


      /**
       * Plugin: UglifyJsPlugin
       * Description: Minimize all JavaScript output of chunks.
       * Loaders are switched into minimizing mode.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       */
      // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines

      new webpack.optimize.UglifyJsPlugin({
         //    // "Debug" mode options

         //    // beautify: true, //debug
         //    // mangle: false, //debug
         //    // dead_code: false, //debug
         //    // unused: false, //debug
         //    // deadCode: false, //debug
         //    // compress: {
         //    //   screw_ie8: true,
         //    //   keep_fnames: true,
         //    //   drop_debugger: false,
         //    //   dead_code: false,
         //    //   unused: false
         //    // }, // debug
         //    // comments: true, //debug


         // "Production" mode options
         beautify: false, //prod
         output: {
            comments: false //prod
         },
         mangle: { //prod
            screw_ie8: true,
            keep_fnames: true

         },
         compress: { //prod
            screw_ie8: true,
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false // we need this for lazy v8
         },
         comments: false, //prod
         sourceMap: false //prod
      }),

      /**
       * Plugin: NormalModuleReplacementPlugin
       * Description: Replace resources that matches resourceRegExp with newResource
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#normalmodulereplacementplugin
       */

      // Replace .js files with .min.js files for production build (when available)

      new webpack.NormalModuleReplacementPlugin(
         /tinymce\/themes\/modern\/theme\.js$/,
         "tinymce/themes/modern/theme.min.js"),


      new webpack.NormalModuleReplacementPlugin(
         /materialize-css\/dist\/js\/materialize\.js$/,
         "materialize-css/dist/js/materialize.min.js"),


      new webpack.NormalModuleReplacementPlugin(
         /tinymce\/tinymce\.js$/,
         "tinymce/tinymce.min.js"),


      new webpack.NormalModuleReplacementPlugin(
         /angular2-hmr/,
         helpers.root('config/modules/angular2-hmr-prod.js')
      ),

      new webpack.NormalModuleReplacementPlugin(
         /zone\.js(\\|\/)dist(\\|\/)long-stack-trace-zone/,
         helpers.root('config/empty.js')
      ),

      /**
       * Plugin: IgnorePlugin
       * Description: Don’t generate modules for requests matching the provided RegExp.
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#ignoreplugin
       */

      new webpack.IgnorePlugin(/angular2-hmr/),

      /**
       * Plugin: CompressionPlugin
       * Description: Prepares compressed versions of assets to serve
       * them with Content-Encoding
       *
       * See: https://github.com/webpack/compression-webpack-plugin
       */
      new CompressionPlugin({
         asset: "[path].gz",
         // regExp: /\.css$|\.html$|\.js$|\.map$/,
         test: /\.(css|html|js|json|map)(\?{0}(?=\?|$))/,
         // threshold: 1 * 1024, // minimum file size for compression to be applied
         algorithm: "gzip",
         minRatio: 0.8
      })

   ],

   /**
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
   node: {
      global: true,
      crypto: "empty",
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false
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
      children: false,
      hash: false,
      chunks: false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
      warnings: false
   }

});
