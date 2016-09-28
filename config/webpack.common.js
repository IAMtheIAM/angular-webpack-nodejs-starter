/**
 * @author: @AngularClass
 * For more info on Webpack Hot module Replacement (HMR), go to :
 * http://andrewhfarmer.com/understanding-hmr/
 */

/**
 * Webpack Plugins & Required Modules
 */
const chalk = require('chalk');
const path = require('path');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HappyThreadPool = HappyPack.ThreadPool({size: 5});
// const HtmlElementsPlugin = require('./html-elements-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
// const SplitByPathPlugin = require('webpack-split-by-path');

/**
 * Webpack Constants
 */

const webpackConditionals = require('./webpack.conditionals')

const webpackPlugins = webpackConditionals.webpackPlugins;
const sassVarsConfig = webpackConditionals.sassVarsConfig;
const ENVlc = webpackConditionals.ENVlc;
const AOT = webpackConditionals.AOT;
const DEBUG = webpackConditionals.DEBUG;
const ENV = webpackConditionals.ENV;


/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

   /**
    * Cache generated modules and chunks to improve performance for multiple incremental builds.
    * This is enabled by default in watch mode.
    * You can pass false to disable it.
    *
    * See: http://webpack.github.io/docs/configuration.html#cache
    */

   cache: true,

   /**
    * The entry point for the bundle
    * Our Angular.js app
    *
    * See: http://webpack.github.io/docs/configuration.html#entry
    */
   entry: {
      /**
       *  Webpack dev server gets loaded by webpack-dev-server CLI, DO NOT include it here
       */
      // 'polyfills': './src/polyfills.ts',
      // 'vendors': './src/vendors.ts',
      // 'app': appBoostrapFile,

      app: [], // this is

   },

   /**
    * Options affecting the resolving of modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#resolve
    */

   resolve: {

      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.scss', '.css', '.html', '.json'],

      // An array of directory names to be resolved to the current directory
      modules: ['node_modules', 'node_modules_custom', helpers.root('src')],

   },

   /**
    * Options affecting the normal modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#module
    */
   module: {

      /**
       * An array of automatically applied loaders.
       *
       * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
       * This means they are not resolved relative to the configuration file.
       *
       * See: http://webpack.github.io/docs/configuration.html#module-loaders
       */
      loaders: [


         /**
          * SASS loader support for *.scss files
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.(scss)$/,
            loaders: DEBUG ?
               ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources', '@epegzz/sass-vars-loader?' + sassVarsConfig] : // dev mode
               ExtractTextPlugin.extract({
                  fallbackLoader: "css-loader",
                  notExtractLoader: "css-loader",
                  loader: ['css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources', '@epegzz/sass-vars-loader?' + sassVarsConfig],
                  publicPath: '/' // 'string' override the publicPath setting for this loader
               })
         },

         /**
          * Typescript loader support for .ts and Angular 2 async detailRoutes via .async.ts
          * Replace template and stylesUrl with require()
          *
          * See: https://github.com/s-panferov/awesome-typescript-loader
          * See: https://github.com/TheLarkInn/angular2-template-loader
          */

         // This is the preloader
         // {
         //    enforce: 'pre',
         //    test: /\.ts$/,
         //    loader: 'string-replace-loader',
         //    query: {
         //       search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
         //       replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
         //       // flags: 'g'
         //    },
         //    include: [helpers.root('./src')]
         // },

         {
            test: /\.ts$/,
            include: [helpers.paths.appRoot, helpers.root('./aot-compiled')],
            exclude: [/\.(spec|e2e)\.ts$/],
            // loaders: ['awesome-typescript-loader'],
            loaders: [
               '@angularclass/hmr-loader',
               'awesome-typescript-loader',
               'angular2-template-loader',
               // 'angular2-router-loader'
               // "angular2-load-children-loader" // this loader replace loadChildren value to function to call require.

            ],
            // loader: 'happypack/loader?id=ts',
         },

         /**
          * Json loader support for *.json files.
          *
          * See: https://github.com/webpack/json-loader
          */
         {
            test: /\.json$/,
            include: helpers.paths.appRoot,
            loader: 'json-loader',

         },

         /**
          * ToString and css loader support for *.css files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.(css)$/,
            loaders: DEBUG ?
               ['style', 'css?sourceMap', 'postcss'] : // dev mode
               ExtractTextPlugin.extract(
                  {
                     fallbackLoader: "css-loader",
                     notExtractLoader: "css-loader",
                     loader: ['css?sourceMap', 'postcss'],
                     publicPath: '/' // 'string' override the publicPath setting for this loader
                  }
               )
         },

         /**
          * Raw loader support for *.html files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.html$/,
            include: helpers.paths.appRoot,
            loader: 'raw-loader',
            exclude: [helpers.root('./src/index.html')],

         },

         // Bootstrap 4 - Used to serve jQuery for Bootstrap scripts:

         {
            test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
            //include: helpers.paths.appRoot,
            loader: 'imports?jQuery=jquery'
         },
         /**
          * Image loader
          * - with support for generated querystrings after loader filename.
          *
          * Minify PNG, JPEG, GIF and SVG images with imagemin
          */
         {
            // test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
            // test: /\.((svg|jpe?g|png|gif|ico)(\?v=[0-9]\.[0-9]))|(svg|jpe?g|png|gif|ico)$/,
            test: /\.(svg|jpe?g|png|gif|ico)(\?{0}(?=\?|$))/,
            loaders: [
               'file?name=assets/images/[name].[ext]',
               'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false}'

               // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "90", speed: 4}}'
            ],
            // happy: {id: 'images'} // HappyPack middleware
         },

         /**
          * Font loaders
          * - with support for generated querystrings after loader filename
          * - the url-loader uses DataUrls.
          * - the file-loader emits files.
          *
          * Font loader
          * For woff / woff2 loader
          * Example: DejaVuSans-Bold.ttf?v=1.1
          */

         {
            // test: /\.((woff2?)(\?v=[0-9]\.[0-9]))|(woff2?)$/,
            test: /\.(woff2?)(\?{0}(?=\?|$))/,
            loader: 'url?limit=10000&name=assets/fonts/[name].[ext]'
         },

         /**
          * Font loader
          * For TTF / EOT fonts
          */
         {
            // test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]))|(ttf|eot)$/,
            test: /\.(ttf|eot)(\?{0}(?=\?|$))/,
            loader: 'file?name=assets/fonts/[name].[ext]'
            // , happy: {id: 'ttf_eot'} // HappyPack middleware
         },

         /**
          * Expose loader.
          * This loader exposes the exports to a module to the global context.
          * Example:
          * Expose file.js as XModule to the global context
          * require("expose?XModule!./file.js")
          *
          * Expose the library "jquery" as "$" and "jQuery"
          * require('expose?$!expose?jQuery!jquery');
          */
         // {
         //    test: require.resolve('jquery'),
         //    loaders: ['expose?jQuery', 'expose?$']
         // }
      ]
   },


   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */
   plugins: webpackPlugins,

   // end plugins

   externals: {
      // use the externals property to map the jquery module to the global jQuery variable:
      // Result: 'require("jquery")' is external and available on the global var jQuery
      // 'jquery': 'jQuery'
   }
   ,

   /**
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
   },
};


/*********************************************************************************************
 ***************   END Webpack Configuration - module.exports object      ********************
 ********************************************************************************************/

if (webpackConditionals.appBoostrapFile) {
   module.exports.entry['app'] = webpackConditionals.appBoostrapFile;
}


console.log("\n \n==================================================");

if (ENV) {

   var ENV_color = ENV === 'development' ? chalk.bold.cyan : chalk.bold.green;
   var DEBUG_color = DEBUG ? chalk.green : chalk.red;
   var AOT_color = AOT ? chalk.green : chalk.red;

   console.log(ENV_color("            Building for: " + ENV));
   console.log(DEBUG_color("            DEBUG: " + DEBUG));
   console.log(AOT_color("            AOT: " + AOT));
   console.log("            ENVlc: " + ENVlc);
   console.log("            helpers.paths.root: " + helpers.paths.root);

} else {
   console.log("            NODE_ENV not set!");
}
console.log("==================================================\n \n");
