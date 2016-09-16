/**
 * @author: @AngularClass
 */

const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
// const DashboardPlugin = require('webpack-dashboard/plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');


/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;
const DOTNETPORT = process.env.DOTNETPORT || 5000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
   host: HOST,
   port: PORT,
   dotnetport: DOTNETPORT,
   ENV: ENV,
   HMR: HMR
});

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = webpackMerge(commonConfig,
  {
    cache: true,

    /**
     * Merged metadata from webpack.common.js for index.html
     *
     * See: (custom attribute)
     */
    metadata: METADATA,

    /**
     * Switch loaders to debug mode.
     *
     * See: http://webpack.github.io/docs/configuration.html#debug
     */
    debug: true,

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */

    devtool: 'cheap-module-source-map',
    // devtool: 'cheap-module-source-map',


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
      path: helpers.root('wwwroot'),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
       */
      sourceMapFilename: '[name].map',

      /** The filename of non-entry chunks as relative Path
       * inside the output.Path directory.
       *
       * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
       */
      chunkFilename: '[id].chunk.js',

      /* publicPath is where you want Webpack to make requests for assets.
       * For example, when running webpack-dev-server on a different port than your main app
       *
       */

      // must end in a trailing forward slash or assets cannot be requested
      publicPath: 'http://' + METADATA.host + ':' + METADATA.port + '/'

    },

    plugins: [

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR
        },
      }),

       /**
        * Plugin: NamedModulesPlugin (experimental)
        * Description: Uses file names as module name.
        *
        * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
        */
       // new NamedModulesPlugin(),

       /**
        * Plugin: DashboardPlugin
        * Description: View progress.
        * `'It's like to work at NASA.'`
        *
        * See: https://github.com/FormidableLabs/webpack-dashboard
        */
       // new DashboardPlugin(),

    ], // end plugins

    /**
     * Static analysis linter for TypeScript advanced options configuration
     * Description: An extensible linter for the TypeScript language.
     *
     * See: https://github.com/wbuchwalter/tslint-loader
     */
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src'
    },

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * These options can be used in combination with the CLI (Command line interface) flags.
     * However, they may conflict, so be careful. Also, some options only work on the CLI, not in
     * the config here.
     *
     * See: https://github.com/webpack/docs/wiki/webpack-dev-server#hot-module-replacement
     * See: https://github.com/webpack/docs/wiki/webpack-dev-server#webpack-dev-server-cli
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
      outputPath: helpers.root('wwwroot'),
      port: METADATA.port,
      host: METADATA.host,
      compress: true, // Set this if you want to enable gzip compression for assets
      headers: {'Access-Control-Allow-Origin': 'http://' + METADATA.host + ':' + METADATA.dotnetport},
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000 // very important, makes it so that Webpack Dev Server Hot Module Replacement works without delay
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
        children: true,
        hash: false,
        chunks: false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
        warnings: false
      }

    },

    /*
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

  });
