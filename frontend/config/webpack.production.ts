/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

import * as webpackMerge from 'webpack-merge'; // used to merge webpack configs
import * as webpack from 'webpack';
import * as helpers from './helpers.js';
import * as WebpackMd5Hash from 'webpack-md5-hash';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as OptimizeJsPlugin from 'optimize-js-plugin';
import { DefinePlugin } from 'webpack';
import * as ngcWebpack from 'ngc-webpack';
import * as AssetsPlugin from 'assets-webpack-plugin';

// import * as PurifyCSSPlugin from 'purifycss-webpack';
// import * as ngToolsWebpack from '@ngtools/webpack';

/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

import * as commonConfig from './webpack.common'; // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const METADATA = webpackConditionals.METADATA;
const outputDir = helpers.paths.outputDir;
const AOT = webpackConditionals.AOT;
let webpackConfig: webpack.Configuration;

/*********************************************************************************************
 *******************************  Webpack Constants/Vars *************************************
 ********************************************************************************************/

   // For PurifyCSS
const templatesPath = helpers.glob.sync(helpers.path.join(helpers.paths.root, "/src/app-components/**/*.template.html"));
const componentsPath = helpers.glob.sync(helpers.path.join(helpers.paths.root, "/src/app-components/**/*.component.ts"));

/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

/* This configuration mode outputs assets with minification and compression. Does not allow easy debugging of production code. No webpack-dev-server */

// function webpackConfig(options: EnvOptions = {}): configuration {
webpackConfig = webpackMerge(commonConfig, {

   // return webpackMerge(commonConfig, {

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

      /**
       * Location of hot updates using webpack --watch mode
       */
      hotUpdateChunkFilename: 'js/chunks/hot/hot-update.js',
      hotUpdateMainFilename : 'js/chunks/hot/hot-update.json',

      /**
       * If bundle goes to ./wwwroot/js/app.bundle.js, and the server would request it by calling /js/app.bundle.js, then this should remain the blank default value of "" since the server is loading files from within the wwwroot folder already
       */
      publicPath: "",
   },

   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */
   plugins: [


      new AssetsPlugin({
         path       : helpers.root(`./${outputDir}/js`),
         filename   : 'webpack.assets.json',
         prettyPrint: true
      }),


      /**
       * Plugin: Angular Ahead-of-Time Webpack Plugin
       * Description: Webpack plugin that AOT compiles your Angular components and modules
       *
       *  ORDER MATTERS: NgcWebpackPlugin must come AFTER DllBundlesPlugin

       * See: https://github.com/angular/angular-cli/blob/master/packages/@ngtools/webpack/README.md
       * See: https://github.com/shlomiassaf/ngc-webpack
       */
      new ngcWebpack.NgcWebpackPlugin({
         /**
          * If false the plugin is a ghost, it will not perform any action.
          * This property can be used to trigger AOT on/off depending on your build target (prod, staging etc...)
          *
          * The state can not change after initializing the plugin.
          * @default true
          */
         disabled: !AOT,
         tsConfig: helpers.root(helpers.paths.tsConfigFileName)
      }),

      // new ngToolsWebpack.AotPlugin({
      //    tsConfigPath: './tsconfig.ngtools-webpack.json',
      //    entryModule: helpers.root('src/app-components/app/app.module') + '#AppModule',
      //    debug: true
      // }),

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
         'ENV'        : JSON.stringify(METADATA.ENV),
         'HMR'        : METADATA.HMR,
         'process.env': {
            'ENV'     : JSON.stringify(METADATA.ENV),
            'NODE_ENV': JSON.stringify(METADATA.ENV),
            'HMR'     : METADATA.HMR,
         }
      }),

      /**
       * Plugin: ExtractTextPlugin
       * Description: Extract SCSS/CSS from bundle into external .css file
       *
       * See: https://github.com/webpack/extract-text-webpack-plugin
       */
      new ExtractTextPlugin({
         filename : '/css/[name].style.css?[hash]',
         disable  : false,
         allChunks: true
      }),

      // /**
      //  * Plugin: PurifyCSS WebPack Plugin
      //  * Description: This is a plugin for WebPack that utilizes PurifyCSS to clean your CSS. Its dead simple, but it requires you to be prepared.
      //  *
      //  * The order matters. ExtractTextPlugin CSS extraction has to happen before purifying.
      //  *
      //  * See: https://github.com/purifycss/purifycss-webpack
      //  *
      //  *
      //  *  Currently breaks compilation. Throws error - diasbling until its fixed
      //  *  See: https://github.com/webpack-contrib/purifycss-webpack/issues/112
      //  */
      //
      // new PurifyCSSPlugin({
      //    // Give paths to parse for rules. These should be absolute!
      //    paths: _.union(templatesPath, componentsPath), // this concats two or more array globs together into one array
      //    moduleExtensions: ['.html'],
      //    verbose: true,
      //    purifyOptions: {
      //       minify: true,
      //       info: true,
      //       output: helpers.root(outputDir) + '/css/purified',
      //       rejected: false,
      //       whitelist: // for classes that are programatically added to DOM, therefore must be whitelisted since they cannot be evaluated during
      // compile-time // '*selector*' means any class which contains that selector. [] } }),

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
         // "Production" mode options
         beautify: false,
         comments: false,
         compress: { //prod
            screw_ie8   : true,
            warnings    : false,
            conditionals: true,
            unused      : true,
            comparisons : true,
            sequences   : true,
            dead_code   : true,
            evaluate    : true,
            if_return   : true,
            join_vars   : true,
            negate_iife : false, // we need this for lazy v8
            keep_fnames : true
         },
         mangle  : { //prod
            screw_ie8  : true,
            keep_fnames: true
         },

      }),

      /**
       * Plugin: NormalModuleReplacementPlugin
       * Description: Replace resources that matches resourceRegExp with newResource
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#normalmodulereplacementplugin
       */

      // Replace .js files with .min.js files for production build (when available)

      new webpack.NormalModuleReplacementPlugin(/tinymce\/themes\/modern\/theme\.js$/, "tinymce/themes/modern/theme.min.js"),

      new webpack.NormalModuleReplacementPlugin(/materialize-css\/dist\/js\/materialize\.js$/, "materialize-css/dist/js/materialize.min.js"),

      new webpack.NormalModuleReplacementPlugin(/tinymce\/tinymce\.js$/, "tinymce/tinymce.min.js"),

      new webpack.NormalModuleReplacementPlugin(/angular2-hmr/, helpers.root('config/modules/angular2-hmr-prod.js')),

      new webpack.NormalModuleReplacementPlugin(/zone\.js(\\|\/)dist(\\|\/)long-stack-trace-zone/, helpers.root('config/empty.js')),

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
         asset    : "[path].gz", // regExp: /\.css$|\.html$|\.js$|\.map$/,
         test     : /\.(css|html|js|json|map)(\?{0}(?=\?|$))/, // threshold: 1 * 1024, // minimum file size for compression to be applied
         algorithm: "gzip",
         minRatio : 0.8
      })

   ],

   /**
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
   node : {
      global        : true,
      crypto        : "empty",
      process       : false,
      module        : false,
      clearImmediate: false,
      setImmediate  : false
   },
   stats: {
      colors      : true,
      errors      : true,
      errorDetails: false,
      reasons     : true,
      publicPath  : false,
      version     : true,
      timings     : true,
      assets      : false,
      modules     : false,
      source      : true,
      children    : false,
      hash        : false,
      chunks      : false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
      warnings    : false
   }

})
// }

// Export
module.exports = webpackConfig;
