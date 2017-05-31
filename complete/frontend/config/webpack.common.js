/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

const chalk = require('chalk');
const path = require('path');
const helpers = require('./helpers.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HappyThreadPool = HappyPack.ThreadPool({size: 5});
// const HtmlElementsPlugin = require('./html-elements-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
// const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const AutoPrefixer = require('autoprefixer');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const querystring = require('querystring');
const AssetsPlugin = require('assets-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
const OptimizeJsPlugin = require('optimize-js-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

/*********************************************************************************************
 *******************************  Webpack Constants/Vars *************************************
 ********************************************************************************************/

const outputDir = 'wwwroot';
const autoPrefixerOptions = { browsers: ['last 2 versions'] };

/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const sassVarsConfig = webpackConditionals.sassVarsConfig;
const ENVlc = webpackConditionals.ENVlc;
const AOT = webpackConditionals.AOT;
const JIT = webpackConditionals.JIT;
const DEBUG = webpackConditionals.DEBUG;
const ENV = webpackConditionals.ENV;
const PRODUCTION = webpackConditionals.PRODUCTION;
const isDLLs = webpackConditionals.isDLLs;
const METADATA = webpackConditionals.METADATA;
const isDevServer = webpackConditionals.isDevServer;


/*********************************************************************************************
 ********************************* Webpack Entry Points **************************************
 ********************************************************************************************/

var appBoostrapFile = AOT ? ['./src/app.bootstrap.aot.ts'] : ['./src/app.bootstrap.ts'];


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

      app: [`${appBoostrapFile}`], // set in webpack.conditionals.js

   },

   /**
    * Options affecting the resolving of modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#resolve
    */
   resolveLoader: {

      // An array of directory names to be resolved to the current directory
      modules: ['node_modules', 'node_modules_custom', helpers.root('src')],
      moduleExtensions: ['-loader']
   },

   resolve: {

      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.scss', '.css', '.html', '.json'],

      alias: {
         // Override any included versions of jquery in node_modules packages with v3.1.0
         jquery: PRODUCTION ?
            path.resolve(helpers.paths.nodeModulesRoot, "jquery/dist/jquery.min.js") :
            path.resolve(helpers.paths.nodeModulesRoot, "jquery/dist/jquery.js"),
         // it's important what kind of paths you're using (relative vs. absolute)
         // tinymce: PRODUCTION ?
         //    path.resolve(helpers.paths.nodeModulesRoot, "tinymce/tinymce.min.js") :
         //    path.resolve(helpers.paths.nodeModulesRoot, "tinymce/tinymce.js"),

      }

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
      rules: [


         /**
          * SASS support for *.scss files
          */
         {
            test: /\.(scss)$/,
            use: DEBUG ?
               ['style', 'css?sourceMap',
                  {
                     loader: 'postcss',
                     options: { postcss: [AutoPrefixer(autoPrefixerOptions)], sourceMap: true }
                  }, 'sass?sourceMap',
                  {
                     loader: 'sass-resources-loader',
                     options: {
                        resources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss'],
                     }
                  }, '@epegzz/sass-vars-loader?' + sassVarsConfig] : // dev mode
               ExtractTextPlugin.extract({
                  fallback: "css-loader",
                  use: ['css?sourceMap', {
                     loader: 'postcss',
                     options: { postcss: [AutoPrefixer(autoPrefixerOptions)], sourceMap: true }
                  }, 'sass?sourceMap', {
                     loader: 'sass-resources-loader',
                     options: {
                        resources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss'],
                     }
                  }, '@epegzz/sass-vars-loader?' + sassVarsConfig],
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

         {
            test: /\.ts$/,
            include: [helpers.paths.appRoot, helpers.root('./compiled/aot')],
            exclude: [/\.(spec|e2e)\.ts$/],
            // use: ['awesome-typescript-loader'],
            use: [
               '@angularclass/hmr-loader',
               'awesome-typescript-loader',
               'angular2-template-loader',
               'angular-router-loader?loader=system',
               "angular2-load-children-loader" // this loader replaces loadChildren value to work with AOT/JIT

            ],
            // loader: 'happypack/loader?id=ts',
         },

         // {
         //    test: require.resolve('tinymce/tinymce'),
         //    use: [
         //       'imports?this=>window',
         //       'exports?window.tinymce'
         //    ]
         // },
         // {
         //    test: /tinymce\/(themes|plugins)\//,
         //    use: [
         //       'imports?this=>window'
         //    ]
         // },

         /**
          * Json loader support for *.json files.
          *
          * See: https://github.com/webpack/json-loader
          */
         {
            test: /\.json$/,
            include: [helpers.paths.appRoot],
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
            use: DEBUG ?
               ['style', 'css?sourceMap', {
                  loader: 'postcss',
                  options: { postcss: [AutoPrefixer(autoPrefixerOptions)], sourceMap: true }
               }] : // dev mode
               ExtractTextPlugin.extract(
                  {
                     fallback: "css-loader",
                     use: ['css?sourceMap', {
                        loader: 'postcss',
                        options: { postcss: [AutoPrefixer(autoPrefixerOptions)], sourceMap: true }
                     }],
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
            include: [helpers.paths.appRoot],
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
            use: [
               // bug, file-loader doesn't recognize query object syntax yet in webpack 2 yet 3/23/17
               // {
               //    loader: 'file',
               //    query: {
               //       name: 'assets/images/[name].[ext]'
               //    }
               //
               // },
               {
                  loader: 'file?name=assets/images/[name].[ext]'
               },
               {
                  loader: 'image-webpack',
                  query: {
                     mozjpeg: {
                        progressive: true,
                     },
                     gifsicle: {
                        interlaced: false,
                     },
                     optipng: {
                        optimizationLevel: 7,
                     }
                  }


                  // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false}'

                  // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "90", speed: 4}}'
               }
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
         //    use: ['expose?jQuery', 'expose?$']
         // }
      ]
   },


   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */
   plugins: [

      new ProgressBarPlugin({
         format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
         clear: false
      }),


      /**
       * Plugin: webpack-dll-bundles-plugin
       * Description: Compiles DLL files as part of the build process. Checks if DLLs are already compiled and contain the same version packages, if so, skips compilation. Monitors for changes in packages and builds the bundles accordingly.
       *
       * See: https://github.com/shlomiassaf/webpack-dll-bundles-plugin
       */

      new DllBundlesPlugin({
         bundles: {
            polyfills: [
               'core-js',
               'ts-helpers'
            ],
            vendors: [
               '@angular/platform-browser',
               '@angular/platform-browser-dynamic',
               '@angular/core',
               '@angular/common',
               '@angular/forms',
               '@angular/http',
               '@angular/router',
               '@angularclass/hmr',
               'rxjs',
               'jwt-decode',
            ]
         },
         dllDir: helpers.root(outputDir + '/dlls'),
         // bundleExtension: '.dll.bundle.js',
         sourceMapFilename: '/maps/[name].map',
         chunkFilename: '/chunks/[name].chunk.js',

         webpackConfig: webpackMergeDll(commonConfig, {
            devtool: 'cheap-module-source-map',
            plugins: [ // These plugins are for the DLL build only, will not be used in dev or production builds.

               new OptimizeJsPlugin({
                  sourceMap: false // prod
               }),

               new UglifyJsPlugin({
                  // DLLS is build in "Production" mode always, since it is not code I will be debugging (that's why its in the DLL bundle anyway)
                  beautify: false, //prod
                  output: {
                     comments: false
                  }, //prod
                  mangle: {
                     screw_ie8: true
                  }, //prod
                  compress: {
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

               new ExtractTextPlugin({
                  filename: '/css/[name].style.css?[hash]',
                  disable: false,
                  allChunks: true
               }),

               new webpack.DllPlugin({
                  // The path to the manifest file which maps between
                  // modules included in a bundle and the internal IDs
                  // within that bundle
                  path: helpers.root(outputDir + '/dlls/[name]-manifest.json'),

                  // The name of the global variable which the library's
                  // require function has been assigned to. This must match the
                  // output.library option above
                  name: '[name]_lib',

               }),

               new webpack.optimize.CommonsChunkPlugin({
                  name: ['polyfills', 'vendors'].reverse()
               }),

               new CompressionPlugin({
                  asset: "[path].gz",
                  test: /\.(css|html|js|json|map)(\?{0}(?=\?|$))/,
                  threshold: 2 * 1024,
                  algorithm: "gzip",
                  minRatio: 0.8
               }),

            ]
         })
      }),


      new AssetsPlugin({
         path: helpers.root('./wwwroot/js'),
         filename: 'webpack.assets.json',
         prettyPrint: true
      }),


      new webpack.optimize.CommonsChunkPlugin({
         name: ['polyfills', 'vendors'].reverse()
      }),

      new webpack.optimize.CommonsChunkPlugin('commons'),


      // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
      new webpack.DefinePlugin({
         'ENV': JSON.stringify(METADATA.ENV),
         'HMR': METADATA.HMR,
         'AOT': AOT,
         'JIT': JIT,
         'process.env': {
            'ENV': JSON.stringify(METADATA.ENV),
            'NODE_ENV': JSON.stringify(METADATA.ENV),
            'HMR': METADATA.HMR
         },
      }),


      /**
       * Plugin: ChunkManifestPlugin
       * Description: Allows exporting a JSON file that maps chunk ids to their resulting asset files. Webpack can then read this mapping, assuming it is provided somehow on the client, instead of storing a mapping (with chunk asset hashes) in the bootstrap script, which allows to actually leverage long-term caching.
       *
       * See: https://github.com/diurnalist/chunk-manifest-webpack-plugin
       */
      // new ChunkManifestPlugin({
      //    filename: 'manifest.json',
      //    manifestVariable: 'webpackManifest'
      // }),
      // /**
      //  * Plugin: HtmlWebpackPlugin
      //  * Description: Simplifies creation of HTML files to serve your webpack bundles.
      //  * This is especially useful for webpack bundles that include a hash in the filename
      //  * which changes every compilation.
      //  *
      //  * This injects the webpack bundles into your main *.html/**.cshtml document which the browser loads
      //  *
      //  * See: https://github.com/ampedandwired/html-webpack-plugin
      //  */
      // new HtmlWebpackPlugin({
      //    template: 'src/index.html',
      //    chunksSortMode: 'dependency',
      //    hash: true, // creates ?[hash], such as: main.bundle.js?62cd29765a7e959d0fe5
      //    filename: 'index.html',
      //    environment: ENV
      // }),

      /**
       * Plugin: AddAssetHtmlPlugin
       * Description: Adds the given JS or CSS file to the files
       * Webpack knows about, and put it into the list of assets
       * html-webpack-plugin injects into the generated html.
       *
       * Used for DllBundlesPlugin
       *
       * See: https://github.com/SimenB/add-asset-html-webpack-plugin
       */

      new AddAssetHtmlPlugin([
         {filepath: helpers.root('wwwroot/dlls/polyfills.dll.bundle.js')},
         {filepath: helpers.root('wwwroot/dlls/vendors.dll.bundle.js')}
      ]),

      // new webpack.DllReferencePlugin({
      //    context: '.',
      //    // manifest: helpers.root('wwwroot/dlls/polyfills-manifest.json'),
      //    manifest: require(helpers.root('wwwroot/dlls', 'polyfills-manifest.json')),
      //
      // }),
      //
      // new webpack.DllReferencePlugin({
      //    context: '.',
      //    // manifest: helpers.root('wwwroot/dlls/vendors-manifest.json'),
      //    manifest: require(helpers.root('wwwroot/dlls', 'vendors-manifest.json')),
      // }),


      new CopyWebpackPlugin(
         [{
            from: 'src/assets',
            to: 'assets',
            force: true
         }],
         {
            copyUnmodified: false
         }),


      new CopyWebpackPlugin([
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/plugins'), to: 'js/ckeditor/plugins'},
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/lang'), to: 'js/ckeditor/lang'},
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/skins'), to: 'js/ckeditor/skins'},
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/ckeditor.js'), to: 'js/ckeditor'},
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/styles.js'), to: 'js/ckeditor'},
         {from: path.resolve(helpers.paths.appRoot, 'lib/ckeditor/contents.css'), to: 'js/ckeditor'},
         {from: path.resolve(helpers.paths.root, 'wwwroot'), to: path.resolve(helpers.paths.root, 'dotnetcore/wwwroot')},
         {from: path.resolve(helpers.paths.root, 'wwwroot'), to: path.resolve(helpers.paths.root, 'dotnetframework/wwwroot')},
      ]),


      new webpack.ProvidePlugin({
         'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
         'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
         // 'tinymce': 'imports?tinymce=>window.tinymce!exports?window.tinymce!tinymce/tinymce.min.js',
         'jQuery': 'jquery',
         '$': 'jquery',
         '_': 'lodash'

      }),
   ],

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

// if (webpackConditionals.appBoostrapFile) {
//    module.exports.entry['app'] = webpackConditionals.appBoostrapFile;
// }


console.log("\n \n==================================================");

if (ENV) {

   var ENV_color = ENV === 'development' ? chalk.bold.cyan : chalk.bold.green;
   var DEBUG_color = DEBUG ? chalk.blue : chalk.red;
   var AOT_color = AOT ? chalk.blue : chalk.red;

   console.log(ENV_color("            Building for: " + ENV));
   console.log(AOT_color("            AOT: " + AOT));
   console.log(DEBUG_color("            DEBUG: " + DEBUG));
   console.log("            PRODUCTION: " + PRODUCTION);
   console.log("            isDLLs: " + isDLLs);
   console.log("            ENVlc: " + ENVlc);
   console.log("            isDevServer: " + isDevServer);
   console.log("            helpers.paths.root: " + helpers.paths.root);

} else {
   console.log("            NODE_ENV not set!");
}
console.log("==================================================\n \n");




