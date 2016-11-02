const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const ExtractTextPlugin = require('extract-text-webpack-plugin');const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const AutoPrefixer = require('autoprefixer');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

// module.exports = webpackMerge(commonConfig,
module.exports = {
   entry: {
      // Entry points for webpack bundles
      polyfills: ['./src/polyfills.ts'],
      vendors: ['./src/vendors.ts']
   },
   output: {
      path: helpers.root('wwwroot'),
      filename: 'dlls/[name].dll.bundle.js',
      sourceMapFilename: 'dlls/maps/[name].map',
      chunkFilename: 'dlls/chunks/[name].chunk.js',


      // The name of the global variable which the library's
      // require() function will be assigned to
      library: '[name]_lib'
   },
   module: {
      loaders: commonConfig.module.loaders,
   },

   plugins: [

      new ExtractTextPlugin({
         filename: '/css/[name].style.css?[hash]',
         disable: false,
         allChunks: true
      }),

      new webpack.DllPlugin({
         // The path to the manifest file which maps between
         // modules included in a bundle and the internal IDs
         // within that bundle
         path: helpers.root('wwwroot/dlls/[name]-manifest.json'),

         // The name of the global variable which the library's
         // require function has been assigned to. This must match the
         // output.library option above
         name: '[name]_lib',

      }),


      // Append a new entry under the "options" property to pass addition custom properties to webpack loaders. They listen for the properties here.
      new webpack.LoaderOptionsPlugin({
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


      new webpack.ContextReplacementPlugin(
         // The (\\|\/) piece accounts for path separators in *nix and Windows
         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
         helpers.root('./src'),
         resolveNgRoute(helpers.root('./src'))
      ),

      new webpack.optimize.CommonsChunkPlugin({
         name: ['polyfills', 'vendors'].reverse()
      }),

      new CompressionPlugin({
         asset: "[path].gz",
         test: /\.(css|html|js|json|map)(\?{0}(?=\?|$))/,
         threshold: 2 * 1024,
         algorithm: "gzip",
         minRatio: 0.8
      })


   ], // end plugins
   stats: {
      colors: true,
      errors: true,
      errorDetails: false,
      reasons: true,
      publicPath: false,
      version: true,
      timings: true,
      assets: true,
      modules: false,
      source: true,
      children: false,
      hash: false,
      chunks: false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
      warnings: false
   },
};
// });

