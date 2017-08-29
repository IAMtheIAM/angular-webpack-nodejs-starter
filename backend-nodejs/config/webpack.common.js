/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/
var fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const helpers = require('./helpers.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const outputDir = helpers.paths.outputDir;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

/*********************************************************************************************
 *******************************  Webpack Constants/Vars *************************************
 ********************************************************************************************/


var nodeModules = fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    });

/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

const commonConfig = require('./webpack.common'); // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const ENVlc = webpackConditionals.ENVlc;
const DEBUG = webpackConditionals.DEBUG;
const ENV = webpackConditionals.ENV;
const PRODUCTION = webpackConditionals.PRODUCTION;
const METADATA = webpackConditionals.METADATA;
const isDevServer = webpackConditionals.isDevServer;
const entryPoint = helpers.paths.root + '/app/server.js';

/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

module.exports = {
    devtool: 'source-map',
    entry: {
        server: ['webpack/hot/signal.js', entryPoint]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: []
        }]
    },
    externals: [
        function (context, request, callback) {
            var pathStart = request.split('/')[0];
            if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
                return callback(null, "commonjs " + request);
            }
            callback();
        }
    ],
    recordsPath: path.join(helpers.root(outputDir), '_records'),
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin(
            {
                banner: 'require("source-map-support").install();',
                raw: true,
                entryOnly: false
            }
        ),
    ],
    target: 'node',
    node: {
        __dirname: true,
        __filename: true
    },
};


/*********************************************************************************************
 ***************   END Webpack Configuration - module.exports object      ********************
 ********************************************************************************************/


console.log("\n \n==================================================");

if (ENV) {

    var ENV_color = ENV === 'development' ? chalk.bold.cyan : chalk.bold.green;
    var DEBUG_color = DEBUG ? chalk.blue : chalk.red;

    console.log(ENV_color("            Building for: " + ENV));
    console.log(DEBUG_color("            DEBUG: " + DEBUG));
    console.log("            PRODUCTION: " + PRODUCTION);
    console.log("            ENVlc: " + ENVlc);
    console.log("            isDevServer: " + isDevServer);
    console.log("            helpers.paths.root: " + helpers.paths.root);

} else {
    console.log("            NODE_ENV not set!");
}
console.log("==================================================\n \n");

