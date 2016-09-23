/**
 * @author: @AngularClass
 * For more info on Webpack Hot module Replacement (HMR), go to :
 * http://andrewhfarmer.com/understanding-hmr/
 */

/**
 * Webpack Plugins & Required Modules
 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const webpack = require('webpack');
const AutoPrefixer = require('autoprefixer');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const path = require('path');
const helpers = require('./helpers');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const querystring = require('querystring');
const HappyThreadPool = HappyPack.ThreadPool({size: 5});
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
// const SplitByPathPlugin = require('webpack-split-by-path');

/**
 * Webpack Constants
 */

const ENVlc = process.env.npm_lifecycle_event;
const AOT = ENVlc === 'devserver:aot' || ENVlc === 'build:dev:aot' || ENVlc === 'build:production:aot';
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

/**
 * The sass-vars-loader will convert any module.exports of a .JS or .JSON file into valid SASS
 * and append to the beginning of each .scss file loaded.
 *
 * See: https://github.com/epegzz/sass-vars-loader
 */
const sassVarsConfig = querystring.stringify({
   files: [
      path.resolve(helpers.paths.appRoot + '/assets/styles/sass-js-variables.js')
      // path.resolve(__dirname, '/path/to/breakpoints.js'), // JS
      // path.resolve(__dirname, '/path/to/colors.json'), // JSON
   ]
});

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

      'polyfills': './src/polyfills.ts',
      'vendors': './src/vendors.ts',
      'app': appBoostrapFile,
      // 'jquery': ["jquery"] // this is referencing the node_module, like calling require('jquery')

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
      extensions: ['.ts', '.js', '.scss', '.css', '.html', '.json'],

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
               ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources','@epegzz/sass-vars-loader?' + sassVarsConfig] : // dev mode
               ExtractTextPlugin.extract({
                  fallbackLoader: "sass-loader",
                  notExtractLoader: "sass-loader",
                  loader: ['css?sourceMap', 'postcss', 'sass?sourceMap', 'sass-resources','@epegzz/sass-vars-loader?' + sassVarsConfig],
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
         {
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'string-replace-loader',
            query: {
               search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
               replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
               // flags: 'g'
            },
            include: [helpers.root('./src')]
         },

         {
            test: /\.ts$/,
            include: helpers.paths.appRoot,
            exclude: [/\.(spec|e2e)\.ts$/],
            // loaders: ['awesome-typescript-loader'],
            loaders: [
               '@angularclass/hmr-loader',
               'awesome-typescript-loader',
               'angular2-template-loader',
               "angular2-load-children-loader" // this loader replace loadChildren value to function to call require.

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
            test: /\.((svg)(\?v=[0-9]\.[0-9]))|(svg|jpe?g|png|gif|ico)$/,
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
            test: /\.((woff2)(\?v=[0-9]\.[0-9]))|(woff2?)$/,
            loader: 'url?limit=10000&name=assets/fonts/[name].[ext]'
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
   plugins: [

      new ContextReplacementPlugin(
         // The (\\|\/) piece accounts for path separators in *nix and Windows
         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
         helpers.root('./src'),
         resolveNgRoute(helpers.root('./src'))
      ),


      new webpack.LoaderOptionsPlugin({
         options: {
            postcss: function () {
               return [AutoPrefixer];
            },
         }
      }),

      new webpack.LoaderOptionsPlugin({
         options: {
            sassResources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss'],
            context: helpers.paths.root
         }
      }),

      new ProgressBarPlugin({
         clear: false,
         format: chalk.red.bold('build [:bar] ') + chalk.green.bold(':percent') + chalk.blue.bold('  (:elapsed seconds)'),

      }),


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

      new CommonsChunkPlugin('commons'),

      /**
       * Plugin: ChunkManifestPlugin
       * Description: Allows exporting a JSON file that maps chunk ids to their resulting asset files. Webpack can then read this mapping, assuming it is provided somehow on the client, instead of storing a mapping (with chunk asset hashes) in the bootstrap script, which allows to actually leverage long-term caching.
       *
       * See: https://github.com/diurnalist/chunk-manifest-webpack-plugin
       */
      // new ChunkManifestPlugin({
      //    filename: "manifest.json",
      //    manifestVariable: "webpackManifest"
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
               // '*.txt'
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
         'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
         jQuery: "jquery",
         $: "jquery",
      }),
   ],

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
   }
}
;


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
