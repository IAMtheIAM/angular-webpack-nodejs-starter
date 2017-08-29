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

/* This configuration mode does not output any assets. All assets are served from webpack-dev-server's memory. Allows debugging of development code using webpack-dev-server with Hot Module Replacement.*/


module.exports = webpackMerge(commonConfig,
    {
        cache: true,
        devtool: 'cheap-module-source-map',
        output: {
            path: helpers.root(outputDir),
            filename: '[name].bundle.js',
            sourceMapFilename: 'maps/[name].map',
            chunkFilename: 'chunks/[name].chunk.js',
            // must end in a trailing forward slash or assets cannot be requested
            publicPath: 'http://' + METADATA.host + ':' + METADATA.devserverport + '/'
        },

        plugins: [
            new NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin({quiet: true})

        ], // end plugins

        devServer: {
            port: METADATA.devserverport,
            host: METADATA.host,
            compress: true, // Set this if you want to enable gzip compression for assets
            headers: {'Access-Control-Allow-Origin': 'http://' + METADATA.host + ':' + METADATA.webserverport},
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000 // very important, makes it so that Webpack Dev Server Hot Module Replacement works without delay
            },
            stats: {
                colors: true,
                errors: true,
                errorDetails: true,
                reasons: false,
                publicPath: false,
                version: true,
                timings: true,
                assets: false,
                modules: false,
                source: false,
                children: false,
                hash: false,
                chunks: false, // make sure 'chunks' is false or it will add 5-10 seconds to your build and incremental build time, due to excessive output.
                warnings: false
            }

        },
    });
