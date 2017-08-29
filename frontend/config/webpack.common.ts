/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/
(<any>process).traceDeprecation = true; // suppressed DeprecationWarning's
(process as any).noDeprecation = true; // suppressed DeprecationWarning's

import * as chalk from 'chalk';
import * as path from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as webpack from 'webpack';
import * as helpers from './helpers';
import * as AutoPrefixer from 'autoprefixer';
import * as querystring from 'querystring';
import { DllBundlesPlugin } from 'webpack-dll-bundles-plugin';
import * as OptimizeJsPlugin from 'optimize-js-plugin';
import * as UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as webpackMerge from 'webpack-merge'; // used to merge webpack configs
const webpackMergeDll = webpackMerge.strategy({ plugins: 'replace' });
import * as Visualizer from 'webpack-visualizer-plugin';
import * as BundleAnalyzer from 'webpack-bundle-analyzer';

const BundleAnalyzerPlugin = BundleAnalyzer.BundleAnalyzerPlugin;

/*********************************************************************************************
 *******************************  Webpack importants/Vars *************************************
 ********************************************************************************************/

const autoPrefixerOptions = { browsers: ['last 2 versions'] };

/*********************************************************************************************
 *******************************  Imported Webpack imports ****************************
 ********************************************************************************************/

// import * as dlls  = require ('./dlls.ts');
// import * as polyfills  = dlls.polyfills;
// import * as vendors  = dlls.vendors;

import { polyfills, vendors } from './dlls';

import * as commonConfig from './webpack.common'; // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const susyIsDevServer = webpackConditionals.susyIsDevServer;
const ENVlc = webpackConditionals.ENVlc;
const AOT = webpackConditionals.AOT;
const JIT = webpackConditionals.JIT;
const DEBUG = webpackConditionals.DEBUG;
const ENV = webpackConditionals.ENV;
const isProduction = webpackConditionals.isProduction;
const isDevServer = webpackConditionals.isDevServer;
const isDLLs = webpackConditionals.isDLLs;
const METADATA = webpackConditionals.METADATA;
const isStats = webpackConditionals.isStats;
const outputDir = helpers.paths.outputDir;
let webpackConfig: webpack.Configuration;

// function webpackConfig(options: EnvOptions = {}): WebpackConfig {
webpackConfig = {

   // return {
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
      // app: './src/app-components/app/app.bootstrap.ts'
      app: AOT
         ? './src/app-components/app/app.bootstrap.aot.ts'
         : './src/app-components/app/app.bootstrap.ts'
   },

   /**
    * Options affecting the resolving of modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#resolve
    */
   resolveLoader: {

      // An array of directory names to be resolved to the current directory
      modules         : [helpers.root('node_modules'), helpers.root('node_modules_custom'), helpers.root('src')],
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
         // tell webpack to analyze the `src` of jquery instead of the `dist` for better optimization and deduping
         jquery: path.resolve(helpers.paths.nodeModulesRoot, "jquery/src/jquery")

         // // Override any included versions of jquery in node_modules packages with v3.1.0
         // jquery: isProduction
         //    ? path.resolve(helpers.paths.nodeModulesRoot, "jquery/dist/jquery.min.js")
         //    : path.resolve(helpers.paths.nodeModulesRoot, "jquery/dist/jquery.js"),         // Override any included versions of jquery in node_modules packages with v3.1.0
      }

   },

   /**
    * Options affecting the normal modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#module
    */

   module: {
      loaders: [/**
       * An array of automatically applied loaders.
       *
       * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
       * This means they are not resolved relative to the configuration file.
       *
       * See: http://webpack.github.io/docs/configuration.html#module-loaders
       */

         /**
          * TypeScript loader support for *.ts files
          */
         // { test: /\.ts$/, loader: ['@ngtools/webpack'] },

         {
            test   : /\.ts$/,
            exclude: [/\.(spec|e2e)\.ts$/],
            use    : [{
               loader : '@angularclass/hmr-loader',
               options: {
                  pretty: !isProduction,
                  prod  : isProduction
               }
            }, {
               /**
                * Lazy Module loader
                *  MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
                */
               loader : 'ng-router-loader',
               options: {
                  loader: 'async-import',
                  genDir: 'compiled',
                  aot   : AOT
               }
            }, {
               loader : 'awesome-typescript-loader',
               options: {
                  configFileName: helpers.paths.tsConfigFileName,
                  useCache      : !isProduction
               }
            }, {
               loader : 'ngc-webpack',
               options: {
                  disable: !AOT
               }
            }, {
               loader: 'angular2-template-loader'
            }]
         },

         /**
          * SASS loader support for *.scss files
          * See: https://github.com/webpack/raw-loader
          *
          *****************************************
          * There are multiple ways to prepend SCSS vars to all .scss files:
          *****************************************
          * Using sass-loader only
          *         'sass?sourceMap&data=$susyDebug:' + susyDebug + ';'
          *
          * Using sass-vars-loader and sass-loader
          *         'sass?sourceMap', '@epegzz/sass-vars-loader?' + sassVarsConfig
          *
          * Using sass-loader and LoaderOptionsPlugin (in plugins section)
          *         'sass?sourceMap'
          *
          new webpack.LoaderOptionsPlugin({
                   options: {
                        sassLoader: {  //Pass custom variables such as ENV variable to scss files.
                             data: "$susyDebug: " + susyDebug + ";"
                            }
                          }
                       }),
          ***************************************/
         {
            test: /\.scss$/,
            use : isDevServer
               ? [{
                  loader: 'style-loader'
               }, {
                  loader : 'css-loader',
                  options: { sourceMap: true }
               }, {
                  loader : 'postcss-loader',
                  options: {
                     postcss  : [AutoPrefixer(autoPrefixerOptions)],
                     sourceMap: true
                  }
               }, {
                  loader : 'sass-loader',
                  options: { sourceMap: true }
               }, {
                  loader : 'sass-resources-loader',
                  options: {
                     resources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss']
                  }
               }, /**
                * The sass-vars-loader will convert the 'vars' property or any module.exports of
                * a .JS or .JSON file into valid SASS and append to the beginning of each
                * .scss file loaded.
                *
                * See: https://github.com/epegzz/sass-vars-loader
                */
                  {
                     loader : '@epegzz/sass-vars-loader?',
                     options: querystring.stringify({
                        vars: JSON.stringify({
                           susyIsDevServer: susyIsDevServer
                        })
                     })
                  }]
               : // dev mode
               ExtractTextPlugin.extract({
                  fallback  : "css-loader",
                  use       : [{
                     loader : 'css-loader',
                     options: { sourceMap: true }
                  }, {
                     loader : 'postcss-loader',
                     options: {
                        postcss  : [AutoPrefixer(autoPrefixerOptions)],
                        sourceMap: true
                     }
                  }, {
                     loader : 'sass-loader',
                     options: { sourceMap: true }
                  }, {
                     loader : 'sass-resources-loader',
                     options: {
                        resources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss']
                     }
                  }, {
                     loader : '@epegzz/sass-vars-loader?',
                     options: querystring.stringify({
                        vars: JSON.stringify({
                           susyIsDevServer: susyIsDevServer
                        })
                        // // Or use 'files" object to specify vars in an external .js or .json file
                        // files: [
                        //    path.resolve(helpers.paths.appRoot + '/assets/styles/sass-js-variables.js')
                        // ],
                     })
                  }],
                  publicPath: '/' // 'string' override the publicPath setting for this loader
               })
         },

         /**
          * Json loader support for *.json files.
          *
          * See: https://github.com/webpack/json-loader
          */
         {
            test   : /\.json$/,
            include: [helpers.paths.appRoot],
            loader : 'json-loader'

         },

         /**
          * CSS loader support for *.css files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */

         // {
         //    test  : /\.css$/,
         //    loader: 'raw-loader'
         // },
         {
            test: /\.css$/,
            use : isDevServer
               ? ['style-loader', 'css-loader?sourceMap', {
                  loader : 'postcss-loader',
                  options: {
                     postcss  : [AutoPrefixer(autoPrefixerOptions)],
                     sourceMap: true
                  }
               }]
               : // dev mode
               ExtractTextPlugin.extract({
                  fallback  : "css-loader",
                  use       : ['css-loader?sourceMap', {
                     loader : 'postcss-loader',
                     options: {
                        postcss  : [AutoPrefixer(autoPrefixerOptions)],
                        sourceMap: true
                     }
                  }],
                  publicPath: '/' // 'string' override the publicPath setting for this loader
               })
         },

         /**
          * Raw loader support for *.html files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */
         {
            test   : /\.html$/,
            include: [helpers.paths.appRoot],
            loader : 'raw-loader',
            exclude: [helpers.root('./src/index.html')]

         },

         // Bootstrap 4 - Used to serve jQuery for Bootstrap scripts:

         {
            test  : /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, //include: helpers.paths.appRoot,
            loader: 'imports-loader?jQuery=jquery'
         }, /**
          * Image loader
          * - with support for generated querystrings after loader filename.
          *
          * Minify PNG, JPEG, GIF and SVG images with imagemin
          */
         {
            // test: /.*\.(gif|png|jpe?g|svg|ico)$/i,
            // test: /\.((svg|jpe?g|png|gif|ico)(\?v=[0-9]\.[0-9]))|(svg|jpe?g|png|gif|ico)$/,

            test: /\.(svg|jpe?g|png|gif|ico)(\?{0}(?=\?|$))/,
            use : [// bug, file-loader doesn't recognize query object syntax yet in webpack 2 yet 3/23/17
               // {
               //    loader: 'file',
               //    query: {
               //       name: 'assets/images/[name].[ext]'
               //    }
               //
               // },
               {
                  loader: 'file-loader?name=assets/images/[name].[ext]'
               }, {
                  loader: 'image-webpack-loader',
                  query : {
                     mozjpeg : {
                        progressive: true
                     },
                     gifsicle: {
                        interlaced: false
                     },
                     optipng : {
                        optimizationLevel: 7
                     }
                  }


                  // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false}'

                  // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "90", speed: 4}}'
               }]
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
            test  : /\.(woff2?)(\?{0}(?=\?|$))/,
            loader: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]'
         },

         /**
          * Font loader
          * For TTF / EOT fonts
          */
         {
            // test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]))|(ttf|eot)$/,
            test  : /\.(ttf|eot)(\?{0}(?=\?|$))/,
            loader: 'file-loader?name=assets/fonts/[name].[ext]'
            // , happy: {id: 'ttf_eot'} // HappyPack middleware
         }

      ]
   },

   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */

   plugins: [

      /**
       * Plugin: webpack-dll-bundles-plugin
       *
       * ORDER MATTERS: DllBundlesPlugin must come BEFORE NgcWebpackPlugin
       *
       * Description: Compiles DLL files as part of the build process. Checks if DLLs are already compiled and contain the same version packages, if so,
       * skips compilation. Monitors for changes in packages and builds the bundles accordingly.
       *
       * See: https://github.com/shlomiassaf/webpack-dll-bundles-plugin
       */
      new DllBundlesPlugin({
         bundles: {
            polyfills: ['core-js', 'ts-helpers'
               // , 'zone.js'
            ],
            vendors  : ['@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/core', '@angular/common', '@angular/forms', '@angular/http', '@angular/router', '@angularclass/hmr', 'rxjs', 'jwt-decode']
         },
         dllDir : helpers.root(outputDir + '/dlls'), // bundleExtension: '.dll.bundle.js',
         // sourceMapFilename: '/maps/[name].map',
         // chunkFilename    : '/chunks/[name].chunk.js',

         webpackConfig: webpackMergeDll(commonConfig, {
            devtool: 'cheap-module-source-map',
            plugins: [ // These plugins are for the DLL build only, will not be used in dev or production builds.

               new OptimizeJsPlugin({
                  sourceMap: false // prod
               }),

               new UglifyJsPlugin({
                  // DLLS is build in "Production" mode always, since it is not code I will be debugging (that's why its in the DLL bundle anyway)

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
                     keep_fnames : false
                  },
                  mangle  : { //prod
                     screw_ie8  : true,
                     keep_fnames: false
                  }

                  // beautify: false, //prod
                  // output: {
                  //    comments: false
                  // }, //prod
                  // mangle: {
                  //    screw_ie8: true
                  // }, //prod
                  // compress: {
                  //    screw_ie8: true,
                  //    warnings: false,
                  //    conditionals: true,
                  //    unused: true,
                  //    comparisons: true,
                  //    sequences: true,
                  //    dead_code: true,
                  //    evaluate: true,
                  //    if_return: true,
                  //    join_vars: true,
                  //    negate_iife: false // we need this for lazy v8
                  // },
                  // comments: false, //prod
                  // sourceMap: false //prod
               }),

               new ExtractTextPlugin({
                  filename : '/css/[name].style.css?[hash]',
                  disable  : false,
                  allChunks: true
               }),

               // new webpack.DllPlugin({
               //    // The path to the manifest file which maps between
               //    // modules included in a bundle and the internal IDs
               //    // within that bundle
               //    path: helpers.root(outputDir + '/dlls/[name]-manifest.json'),
               //
               //    // The name of the global variable which the library's
               //    // require function has been assigned to. This must match the
               //    // output.library option above
               //    name: '[name]_lib'
               //
               // }),

               new webpack.optimize.CommonsChunkPlugin({
                  names: ['polyfills', 'vendors'].reverse()
               }),

               new webpack.optimize.CommonsChunkPlugin({
                  name: 'commons'
               }),

               new CompressionPlugin({
                  asset    : "[path].gz",
                  test     : /\.(css|html|js|json|map)(\?{0}(?=\?|$))/,
                  threshold: 2 * 1024,
                  algorithm: "gzip",
                  minRatio : 0.8
               })

            ]
         })
      }),

      // /**
      //  * Plugin: ChunkManifestPlugin
      //  * Description: Allows exporting a JSON file that maps chunk ids to their resulting asset files. Webpack can then read this mapping, assuming it is
      // provided somehow on the client, instead of storing a mapping (with chunk asset hashes) in the bootstrap script, which allows to actually leverage
      // long-term caching. * * See: https://github.com/diurnalist/chunk-manifest-webpack-plugin */ new ChunkManifestPlugin({ filename: 'manifest.json',
      // manifestVariable: 'webpackManifest' }),

      // new webpack.optimize.CommonsChunkPlugin({
      //    name: ['polyfills', 'vendors'].reverse()
      // }),

      // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
      new webpack.DefinePlugin({
         'ENV'        : JSON.stringify(METADATA.ENV),
         'HMR'        : METADATA.HMR,
         'AOT'        : AOT,
         'JIT'        : JIT,
         'process.env': {
            'ENV'     : JSON.stringify(METADATA.ENV),
            'NODE_ENV': JSON.stringify(METADATA.ENV),
            'HMR'     : METADATA.HMR
         }
      }),

      new CopyWebpackPlugin([{
         from : 'src/assets',
         to   : 'assets',
         force: true
      }], {
         copyUnmodified: false,
         ignore        : ['styles/**']
      }),

      /**
       * Plugin: ProvidePlugin
       * Description: Automatically load modules instead of having to import or require them everywhere.
       * Whenever the `identifier` is encountered as free variable in a module, the `module` is loaded automatically and the `identifier` is filled with the
       * exports of the loaded `module` (of `property` in order to support named exports).
       *
       * new webpack.ProvidePlugin({
               identifier: 'module1', // or
               identifier: ['module1', 'property1'],
            })
       */
      new webpack.ProvidePlugin({
         $      : 'jquery',
         jQuery : 'jquery',
         // 'Promise': 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise-loader',
         // '_'      : 'lodash'
         // 'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
         // 'tinymce': 'imports?tinymce=>window.tinymce!exports-loader?window.tinymce!tinymce/tinymce.min.js',

      })], // end plugins

   externals: {
      // use the externals property to map the jquery module to the global jQuery variable:
      // Result: 'require("jquery")' is external and available on the global var jQuery
      // 'jquery': 'jQuery'
   },

   /**
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
}
// };

console.log("\n \n==================================================");

if (ENV) {

   var ENV_color = ENV === 'development'
      ? chalk.bold.blue
      : chalk.bold.green;
   ENV_color = ENV === 'debug'
      ? chalk.bold.cyan
      : ENV_color;
   var isDevServer_color = isDevServer
      ? chalk.bold.blue
      : chalk.red;
   var isProduction_color = isProduction
      ? chalk.bold.green
      : chalk.red;
   var AOT_color = AOT
      ? chalk.blue
      : chalk.red;

   console.log(ENV_color("            Building for: " + ENV));
   console.log(isDevServer_color("            isDevServer: " + isDevServer));
   console.log(AOT_color("            AOT: " + AOT));
   console.log(isProduction_color("            isProduction: " + isProduction));
   console.log("            isDLLs: " + isDLLs);
   console.log("            isStats: " + isStats);
   console.log("             ");
   console.log("            ENVlc: " + ENVlc);
   // console.log("            helpers.paths.root: " + helpers.paths.root);
   console.log("            outputDir: " + helpers.root(outputDir));

} else {
   console.log("            NODE_ENV not set!");
}
console.log("==================================================\n \n");

// // Export - must invoke the function for webpackMerge to see the returned Object to merge
// module.exports = webpackConfig();

module.exports = webpackConfig;

/**
 * Webpack plugins that output html file of webpack build Statistics.
 *
 * See: https://github.com/chrisbateman/webpack-visualizer
 * See: https://github.com/th0r/webpack-bundle-analyzer
 */

// console.log((process as any).env.STATS);
// Add plugin for STATS mode only
if (isStats) {
   let conditionalPlugins = [new Visualizer({
      filename: './webpack-bundle-stats.html'
   }), new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode  : 'server',
      reportFilename: 'webpack-bundle-report.html',
   })]
   for (var i = 0; i < conditionalPlugins.length; i++) {
      module.exports.plugins.push(conditionalPlugins[i]);
   }
}
