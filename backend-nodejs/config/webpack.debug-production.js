/*********************************************************************************************
 *******************************  Webpack Requires & Plugins *********************************
 ********************************************************************************************/

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpack = require('webpack');
const helpers = require('./helpers');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');


/*********************************************************************************************
 *******************************  Imported Webpack Constants/Vars ****************************
 ********************************************************************************************/

const commonConfig = require('./webpack.common'); // the settings that are common to prod and dev
const webpackConditionals = require('./webpack.conditionals');
const METADATA = webpackConditionals.METADATA;
const outputDir = helpers.paths.outputDir;


/*********************************************************************************************
 ********************************* BEGIN Webpack Configuration *******************************
 *********************************    module.exports object      *****************************
 ********************************************************************************************/

/* This configuration mode outputs assets similar to production mode, but without any minification or compression. Allows easy debugging of production code. No webpack-dev-server */

module.exports = webpackMerge(commonConfig,
    {
        cache: true,
        devtool: 'cheap-module-source-map',
        output: {
            path: helpers.root(outputDir),
            filename: '[name].bundle.js',
            sourceMapFilename: 'maps/[name].map',
            chunkFilename: 'chunks/[name].chunk.js',
        },
        plugins: [
            new NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin({quiet: true})


        ], // end plugins
    });
