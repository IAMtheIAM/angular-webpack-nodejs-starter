/**
 * @author: @AngularClass
 * For more info on Webpack Hot module Replacement (HMR), go to :
 * http://andrewhfarmer.com/understanding-hmr/
 */

/**
 * Webpack Plugins & Required Modules
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const webpack = require('webpack');
const helpers = require('./helpers');
const AutoPrefixer = require('autoprefixer');
const Path = require('path');
const HappyPack = require('happypack');
const HappyThreadPool = HappyPack.ThreadPool({size: 5});
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const VSFixSourceMapsPlugin = require('vs-fix-sourcemaps');

/**
 * Webpack Constants
 */

const ENVlc = process.env.npm_lifecycle_event;
const AOT = ENVlc === 'devserver:aot' || ENVlc === 'build:dev:aot' || ENVlc === 'build:production';
// const isProd = ENVlc === 'build:prod' || ENVlc === 'server:prod' || ENVlc === 'watch:prod' ||  ENVlc === 'build:aot';

var appBoostrapFile;
if (AOT) {
   appBoostrapFile = './src/app.bootstrap.aot.ts'
} else {
    appBoostrapFile = './src/app.bootstrap.ts'
}

const ENV = process.env.NODE_ENV;
const DEBUG = ENV !== 'production';
const METADATA = {
   host: 'localhost',
   port: 4000,
   dotnetport: 5000,
   baseUrl: '/',
   ENV: ENV

};
const PATHS = {
   appRoot: [Path.resolve(__dirname, "../src")],
   happyPackTempDir: './cache/happypack'
};


/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

   /**
    * Static metadata for index.html
    *
    * See: (custom attribute)
    */
   metadata: METADATA,

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
      //// Entry points for webpack bundles
      // 'main': ['./src/webpack.entry.bundle.ts']
      /**
       *  Webpack dev server gets loaded by webpack-dev-server CLI, DO NOT include it here
       */

      'polyfills': './src/polyfills.ts',
      'vendors': './src/vendors.ts',
      'app': appBoostrapFile
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
       * IMPORTANT: Setting this option will override the default, meaning that webpack will no longer
       * try to resolve modules using the default extensions. If you want modules that were required with
       * their extension (e.g. require('./somefile.ext')) to be properly resolved, you must include an empty
       * string in your array. Similarly, if you want modules that were required without extensions
       * (e.g. require('underscore')) to be resolved to files with �.js� extensions, you must include
       * ".js" in your array.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['', '.ts', '.js', '.scss', '.css', '.html', '.json'],

      /** Make sure root is src */
      root: helpers.root('src'),

      /** To enable webpack to resolve in multiple package directories: */
      modulesDirectories: ['node_modules', 'src'],
   },

   /**
    * Options affecting the normal modules.
    *
    * See: http://webpack.github.io/docs/configuration.html#module
    */
   module: {

      /**
       * An array of applied pre and post loaders.
       *
       * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
       */
      preLoaders: [
         {
            test: /\.ts$/,
            loader: 'string-replace-loader',
            query: {
               search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
               replace: '$1.import($3).then(mod => mod.__esModule ? mod.default : mod)',
               flags: 'g'
            },
            include: [helpers.root('src')]
         },

      ],

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
          * Typescript loader support for .ts and Angular 2 async routes via .async.ts
          * Replace template and stylesUrl with require()
          *
          * See: https://github.com/s-panferov/awesome-typescript-loader
          * See: https://github.com/TheLarkInn/angular2-template-loader
          */
         {
            test: /\.ts$/,
            include: PATHS.appRoot,
            exclude: [/\.(spec|e2e|d)\.ts$/],
            // loaders: ['awesome-typescript-loader'],
            loaders: [
               '@angularclass/hmr-loader',
               'awesome-typescript-loader',
               'angular2-template-loader',
               'angular2-router-loader?loader=system&genDir=wwwroot/aot-compiled/app-components&aot=' + AOT
            ],
            // loader: 'ts-loader',
            // loader: 'happypack/loader?id=ts',
         },

         /**
          * Json loader support for *.json files.
          *
          * See: https://github.com/webpack/json-loader
          */
         {
            test: /\.json$/,
            include: PATHS.appRoot,
            loader: 'json-loader',
            // happy: {id: 'json'} // HappyPack middleware

         },

         /**
          * ToString and css loader support for *.css files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.css$/,
            // include: PATHS.appRoot,
            // loaders: ['to-string-loader', 'css-loader'],
            // loader: 'raw-loader',
            // loader: 'style/url!file?name=assets/css/[name].[sha512:hash:base64:7].css',
            loaders: ['style', 'css?sourceMap', 'postcss'],
            // happy: {id: 'css'} // HappyPack middleware

         },

         /**
          * Raw loader support for *.html files
          * Returns file content as string
          *
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.html$/,
            include: PATHS.appRoot,
            loader: 'raw-loader',
            exclude: [helpers.root('src/index.html')],
            // happy: {id: 'html'} // HappyPack middleware

         },

         /**
          * SASS loader support for *.scss files
          * See: https://github.com/webpack/raw-loader
          */
         {
            test: /\.(scss)$/,
            loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources']
            // , happy: {id: 'scss'} // HappyPack middleware


            /**
             *
             * What this basically says is:
             * (Read from right to left)
             *
             * 1) First look for any file ending in .scss  (based on test regex pattern above)
             *
             * 2) Then load the "sass-resources" and @import all mixins and variables from into each .scss file.
             * See: https://github.com/shakacode/sass-resources-loader
             *
             * 3) Then load "sass-loader" and compile the sass and generate sourcemaps.
             * Sass-loader pipes that output of compiled sass to the "file-loader".
             * See: https://github.com/jtangelder/sass-loader
             *
             * 4) File-loader prepends assets/css before the file and then renames the file to [name].compiled.[hash].css. This means the output is
             * assets/css/[name].compiled.[hash].css. The Path to the public url is returned as output. File-loader pipes the output to "style-loader".
             * See: https://github.com/webpack/file-loader
             *
             * Finally because we specified "style/url", "style-loader" takes the public url, creates a <link> tag with the href= to the URL output from file-loader, and appends that to the <head>
             * Example: <link rel="stylesheet" type="text/css" href="http://localhost:4000/assets/css/about.compiled.1ye2TBV.css">
             * See: https://github.com/webpack/style-loader
             *
             * If we specified "style" without the "/url" part, instead of creating an external css <link> tag, it will embed the css directly into the <head>
             * inside of a <style>...</style> tag.
             *
             * Note: The "-loader" part of each of the loaders is optional. So you can write "file-loader" or "file", "sass-loader" or "sass", etc.
             *
             */
         },

         // Bootstrap 4 - Used to serve jQuery for Bootstrap scripts:

         {
            test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
            //include: PATHS.appRoot,
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
            test: /\.((svg)(\?v=[0-9]\.[0-9]))|(svg|jpe?g|png|gif|ico)$/,
            loaders: [
               'file?name=assets/images/[name].[ext]',
               'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false}'

               // 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "90", speed: 4}}'
            ],
            happy: {id: 'images'} // HappyPack middleware
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
            test: /\.((woff2)(\?v=[0-9]\.[0-9]))|(woff2?)$/,
            loader: 'url?limit=10000&name=assets/fonts/[name].[ext]'
            // , happy: {id: 'woff2'} // HappyPack middleware
         },

         /**
          * Font loader
          * For TTF / EOT fonts
          */
         {
            test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]))|(ttf|eot)$/,
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
         {
            test: require.resolve('jquery'),
            loaders: ['expose?jQuery', 'expose?$']
         }
      ]
   },

   postcss: function () {
      return [AutoPrefixer];
   },

   sassResources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss'],

   /**
    * Add additional plugins to the compiler.
    *
    * See: http://webpack.github.io/docs/configuration.html#plugins
    */
   plugins: [


      new HappyPack({
         id: 'js',
         loaders: ['source-map-loader'],
         threadPool: HappyThreadPool,
         tempDir: PATHS.happyPackTempDir,
         cache: false
      }),
      // new HappyPack({id: 'scss', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir, cache: false}),
      // new HappyPack({id: 'css', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir, cache: false}),
      // new HappyPack({id: 'json', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir, cache: false}),
      // new HappyPack({id: 'html', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir, cache: false}),
      // new HappyPack({id: 'images', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir}),
      // new HappyPack({id: 'woff2', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir}),
      // new HappyPack({id: 'ttf_eot', threadPool: HappyThreadPool, tempDir: PATHS.happyPackTempDir}),
      // new HappyPack({
      //    id: 'ts',
      //    loader: 'awesome-typescript-loader',
      //    threadPool: HappyThreadPool,
      //    tempDir: PATHS.happyPackTempDir,
      //    cache: false
      // }),


      // //new HappyPack({
      // //  id: 'scss',
      // //  threadPool: HappyThreadPool,
      // //  loaders: ['style', 'css?sourceMap', 'sass?sourceMap&sourceComments'],
      // //  tempDir: PATHS.happyPackTempDir
      // //  //loaders: DEBUG
      // //  //           ? ['style', 'css?sourceMap', 'sass?sourceMap&sourceComments']
      // //  //           : ['style/url', 'file?name=/assets/css/[name].compiled.[sha512:hash:base64:7].css', 'sass?sourceMap&sourceComments']
      // //}),

      /**
       * Plugin: ExtractTextPlugin
       * Extracts text into external css file
       *
       * See:
       */

      //new ExtractTextPlugin('assets/css/[name].css'),

      /**
       * Plugin: VSFixSourceMapsPlugin
       * Fix Webpack JSX and JS Sourcemaps in Visual Studio
       *
       * See: https://github.com/joevbruno/vs-fix-sourcemaps
       */

      //new VSFixSourceMapsPlugin(),

      /**
       * Plugin: ForkCheckerPlugin
       * Description: Do type checking in a separate process, so webpack don't need to wait.
       *
       * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
       */
      new ForkCheckerPlugin(),

      /**
       * Plugin: CommonsChunkPlugin
       * Description: Shares common code between the pages.
       * It identifies common modules and put them into a commons chunk.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
       * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
       */

      new webpack.optimize.CommonsChunkPlugin({
         name: ['polyfills', 'vendors'].reverse()
      }),


      /**
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * This injects the webpack bundles into your main *.html/**.cshtml document which the browser loads
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
         template: 'src/index.html',
         chunksSortMode: 'dependency',
         hash: true, // creates ?[hash], such as: main.bundle.js?62cd29765a7e959d0fe5
         filename: 'index.html',
         environment: ENV
      }),

      /**
       * Plugin: HtmlHeadConfigPlugin
       * Description: Generate html tags based on javascript maps.
       *
       * If a publicPath is set in the webpack output configuration, it will be automatically added to
       * href attributes, you can disable that by adding a "=href": false property.
       * You can also enable it to other attribute by settings "=attName": true.
       *
       * The configuration supplied is map between a location (key) and an element definition object (value)
       * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
       *
       * Example:
       *  Adding this plugin configuration
       *  new HtmlElementsPlugin({
       *    headTags: { ... }
       *  })
       *
       *  Means we can use it in the template like this:
       *  <%= webpackConfig.htmlElements.headTags %>
       *
       * Dependencies: HtmlWebpackPlugin
       */

      new HtmlElementsPlugin({
         headTags: require('./head-config.common')
      }),
      /**
       * Plugin: CopyWebpackPlugin
       * Description: Copy files and directories in webpack.
       *
       * Copies project static assets.
       *
       * See: https://www.npmjs.com/package/copy-webpack-plugin
       */
      new CopyWebpackPlugin(
         [
            // Using npm copyfiles to do this since it would not copy the files when paired with a prebuild:dev "clean:wwwroot" command
            // { from: 'wwwroot/index.html', to: '../Views/Shared', force: true },
            {
               from: 'src/assets',
               to: 'assets',
               force: true
            }
         ],
         {
            ignore: [
               // Doesn't copy any files with a txt extension
               //'*.txt',

               // Doesn't copy any file, even if they start with a dot
               //{ glob: '**/**', dot: true }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: false
         }),
      /**
       * Plugin: Fetch.js
       * Description: Request represents a HTTP request to be performed via fetch().
       *
       * The global fetch function is an easier way to make web requests and handle responses than using an
       * XMLHttpRequest. This polyfill is written as closely as possible to the standard Fetch specification at.
       *
       * See: https://fetch.spec.whatwg.org
       */
      new webpack.ProvidePlugin({
         'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
         'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),

      /**
       * Plugin: Underscore.js
       * Description: A JavaScript library that provides useful functional programming helpers.
       *
       * Underscore provides over 100 functions that support both your favorite workaday functional helpers: map,
       * filter, invoke � as well as more specialized goodies: function binding, javascript templating, creating
       * quick indexes, deep equality testing, and so on.

       *
       * See: http://underscorejs.org/
       */
      new webpack.ProvidePlugin({
         "_": "underscore"
      }),

      /**
       * Plugin: jQuery.js
       * Description: A JavaScript library for DOM manipulation.
       *
       * jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal
       * and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across
       * a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that
       * millions of people write JavaScript.

       *
       * See: http://jquery.com/
       */
      // new webpack.ProvidePlugin({
      //    "$": "jquery",
      //    "jquery": "jquery",
      //    "jQuery": "jquery",
      //    "JQuery": "jquery",
      //    "window.jquery": "jquery",
      //    "window.jQuery": "jquery",
      //    "window.JQuery": "jquery"
      // }),

      /**
       * Plugin: Tether.js
       * Description: A positioning engine to make overlays, tooltips and dropdowns better.
       *
       * Tether is a small, focused JavaScript library for defining and managing the position
       * of user interface (UI) elements in relation to one another on a web page. It is a tool
       * for web developers building features that require certain UI elements to be precisely
       * positioned based on the location of another UI element.

       *
       * See: https://github.com/HubSpot/tether
       * See: http://tether.io/
       */
      new webpack.ProvidePlugin({
         "window.Tether": "tether"
      })
   ],

   /**
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
   node: {
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
   }
};



console.log("\n \n==================================================");

if (ENV) {
   console.log("            Building for: " + ENV);
   console.log("            DEBUG: " + DEBUG);
   console.log("            ENVlc: " + ENVlc);
   console.log("            AOT: " + AOT);
} else {
   console.log("            NODE_ENV not set!");
}
console.log("==================================================\n \n");

// // // Types
// interface WebpackConfig {
//    cache?: boolean;
//    target?: string;
//    devtool?: string;
//    entry: any;
//    output: any;
//    module?: any;
//    plugins?: Array<any>;
//    resolve?: {
//       root?: string;
//    extensions?: Array<string>;
//    moduleDirectories?: Array<string>;
//    mainFields?: Array<string>;
// };
//    devServer?: {
//       contentBase?: string;
//    port?: number;
//    historyApiFallback?: boolean;
//    hot?: boolean;
//    inline?: boolean;
// };
//    node?: {
//       process?: boolean;
//    global?: boolean | string;
//    Buffer?: boolean;
//    crypto?: string | boolean;
//    module?: boolean;
//    clearImmediate?: boolean;
//    setImmediate?: boolean
//    clearTimeout?: boolean;
//    setTimeout?: boolean
// };
// }
