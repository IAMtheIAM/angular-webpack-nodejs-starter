/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge'; // used to merge webpack configs
import * as helpers from './helpers';
import * as NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as ngcWebpack from 'ngc-webpack';
import * as AssetsPlugin from 'assets-webpack-plugin';

// import * as ngToolsWebpack from '@ngtools/webpack');

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
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

/* This configuration mode outputs assets similar to production mode, but without any minification or compression. Allows easy debugging of production code. No webpack-dev-server */

// function webpackConfig(options: EnvOptions = {}): configuration {
webpackConfig = webpackMerge(commonConfig, {

   // return webpackMerge(commonConfig, {

   /**
    * Developer tool to enhance debugging
    *
    * See: http://webpack.github.io/docs/configuration.html#devtool
    * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
    */

   // devtool: 'eval',
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

      /** The filename of non-entry chunks as relative Path
       * inside the output.Path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: 'js/chunks/[name].chunk.js',

      /**
       * Location of hot updates using webpack --watch mode
       */
      hotUpdateChunkFilename: 'js/chunks/hot/hot-update.js',
      hotUpdateMainFilename : 'js/chunks/hot/hot-update.json',
   },

   plugins: [


      new AssetsPlugin({
         path       : helpers.root(`./${outputDir}/js`),
         filename   : 'webpack.assets.json',
         prettyPrint: true
      }),


      // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines

      new webpack.optimize.UglifyJsPlugin({
         // "Debug" mode options
         beautify: true, //debug
         comments: false, //debug
         mangle  : false, //debug
         compress: false,
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
       * Plugin: NamedModulesPlugin (experimental)
       * Description: Uses file names as module name.
       *
       * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
       */
      new NamedModulesPlugin(),

      new ExtractTextPlugin({
         filename : '/css/[name].style.css?[hash]',
         disable  : false,
         allChunks: true
      })

   ], // end plugins

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
