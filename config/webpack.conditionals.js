
/*********************************************************************************************
 *******************************  Webpack Requires ******************************************
 ********************************************************************************************/
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const webpack = require('webpack');
const AutoPrefixer = require('autoprefixer');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const querystring = require('querystring');
const path = require('path');
const helpers = require('./helpers');


/*********************************************************************************************
 *******************************  Webpack Constants/Vars ******************************************
 ********************************************************************************************/
const ENVlc = process.env.npm_lifecycle_event;
const AOT = ENVlc === 'devserver:aot' || ENVlc === 'build:dev:aot' || ENVlc === 'build:production:aot';
// const isProd = ENVlc === 'build:prod' || ENVlc === 'server:prod' || ENVlc === 'watch:prod' ||  ENVlc === 'build:aot';
const ENV = process.env.NODE_ENV;
var DEBUG = ENV === 'development'
const METADATA = {
   host: 'localhost',
   port: 4000,
   dotnetport: 5000,
   baseUrl: '/',
   ENV: ENV
};

/*********************************************************************************************
 *******************************  Webpack Plugins ********************************************
 ********************************************************************************************/


var webpackPlugins = [


   new webpack.LoaderOptionsPlugin({
      /** Append a new entry under the "options" property to pass addition custom properties to webpack loaders. They listen for the properties here. */
      options: {
         postcss: function () {
            return [AutoPrefixer];
         },
         sassResources: ['./src/assets/styles/variables.scss', './src/assets/styles/mixins.scss'],
         context: helpers.paths.root,
         // sassLoader: {  //Pass custom variables such as ENV variable to scss files.
         //    data: "$susyDebug: " + susyDebug + ";"
         // }
      }
   }),

   new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'),
      resolveNgRoute(helpers.root('./src'))
   ),


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

   new webpack.optimize.CommonsChunkPlugin('commons'),

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
]


/*********************************************************************************************
 ******************************* Conditional Webpack Plugins ********************************
 ********************************************************************************************/


if (ENV === "production" || ENV === "development" || ENV === "testing") {

   var conditionalPlugins = [

      new webpack.DllReferencePlugin({
         context: '.',
         // manifest: helpers.root('wwwroot/dlls/polyfills-manifest.json'),
         manifest: require(helpers.root('wwwroot/dlls', 'polyfills-manifest.json')),

      }),

      new webpack.DllReferencePlugin({
         context: '.',
         // manifest: helpers.root('wwwroot/dlls/vendors-manifest.json'),
         manifest: require(helpers.root('wwwroot/dlls', 'vendors-manifest.json')),
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
         [{
            from: 'src/assets',
            to: 'assets',
            force: true
         }],
         {
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
         // jQuery: "jquery",
         // $: "jquery",
      }),

   ] // end conditional plugins

   // module.exports.plugins = module.exports.plugins.concat(conditionalPlugins)
   webpackPlugins = webpackPlugins.concat(conditionalPlugins)
}

/*********************************************************************************************
 ********************************* Webpack Entry Points **************************************
 ********************************************************************************************/


// Skip this entry point if we're building the DLLs, app.bootstrap is only for regular builds
if (ENVlc !== 'build:dlls:jit') {
   var appBoostrapFile;
   if (AOT) {
      appBoostrapFile = ['./src/app.bootstrap.aot.ts'];
      // module.exports.entry['app'] = ["./src/app.bootstrap.aot.ts"];

   }
   else {
      appBoostrapFile = ['./src/app.bootstrap.ts'];
      // module.exports.entry['app'] = ["./src/app.bootstrap.ts"];

   }
}

/*********************************************************************************************
 ********************************* Sass Vars Loader ******************************************
 ********************************************************************************************/

/**
 * The sass-vars-loader will convert any module.exports of a .JS or .JSON file into valid SASS
 * and append to the beginning of each .scss file loaded.
 *
 * See: https://github.com/epegzz/sass-vars-loader
 */
   //    //Flag to trigger the styles
   // var sidebarEnabled = true;
   // var contentContainerWidth = sidebarEnabled ? 21 : 24;
   // var contentContainerPosition = sidebarEnabled ? 4 : 1;
   // var sidebarWidth = sidebarEnabled ? 3 : 0;
   // var sidebarPosition = sidebarEnabled ? 1 : 0;
   // var showSidebar = sidebarEnabled ? 'visible' : 'hidden';


   // Sets debug for Susy Grid to "hide" or "show" depending on environment variable
const susyDebug = DEBUG ? 'show' : 'hide';
const sassVarsConfig = querystring.stringify({
   files: [
      // path.resolve(__dirname, '/path/to/breakpoints.js'), // JS
      // path.resolve(__dirname, '/path/to/colors.json'), // JSON

      // set vars in external .js or .json file
      path.resolve(helpers.paths.appRoot + '/assets/styles/sass-js-variables.js')
   ],

   /** Wait for my PR to be approved, then this will work.
    *  See: https://github.com/epegzz/sass-vars-loader/pull/5
    */
   // vars: JSON.stringify(
   //    {
   //       susyDebug: susyDebug,
   //       contentContainerWidth: contentContainerWidth,
   //       contentContainerPosition: contentContainerPosition,
   //       sidebarWidth: sidebarWidth,
   //       sidebarPosition: sidebarPosition,
   //       showSidebar: showSidebar
   //    }),

});


/*********************************************************************************************
 ********************************* Exports ***************************************************
 ********************************************************************************************/

exports.webpackPlugins = webpackPlugins;
exports.sassVarsConfig = sassVarsConfig;
exports.ENVlc = ENVlc;
exports.AOT = AOT;
exports.DEBUG = DEBUG;
exports.ENV = ENV;
if (appBoostrapFile) {
   exports.appBoostrapFile = appBoostrapFile;
}
