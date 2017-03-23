/*********************************************************************************************
 *******************************  Webpack Requires ******************************************
 ********************************************************************************************/
const webpack = require('webpack');
const querystring = require('querystring');
const path = require('path');
const helpers = require('./helpers.js');


/*********************************************************************************************
 *******************************  Webpack Constants/Vars ******************************************
 ********************************************************************************************/
const ENVlc = process.env.npm_lifecycle_event;
const AOT = ENVlc === 'devserver:aot' || ENVlc === 'build:dev:aot' || ENVlc === 'build:production:aot';
const JIT = ENVlc === 'devserver:jit' || ENVlc === 'build:dev:jit'  || ENVlc === 'build:dev:jit:watch' || ENVlc === 'build:production:jit' || ENVlc === 'build:production:jit:watch';
const isDLLs = ENVlc === 'build:dlls:jit';

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';
const DEBUG = ENV === 'development';
const HOST = process.env.HOST || 'localhost';
const HMR = helpers.hasProcessFlag('hot');
const PORT = process.env.PORT || 4000;
const DOTNETPORT = process.env.DOTNETPORT || 5000;

const METADATA = {
    host: HOST,
    port: PORT,
    dotnetport: DOTNETPORT,
    ENV: ENV,
    baseUrl: '/',
    HMR: HMR
};


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


// Sets debug for Susy Grid to 'hide' or 'show' depending on environment variable
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

// exports.webpackPlugins = webpackPlugins;
exports.sassVarsConfig = sassVarsConfig;
exports.ENVlc = ENVlc;
exports.AOT = AOT;
exports.JIT = JIT;
exports.DEBUG = DEBUG;
exports.ENV = ENV;
exports.PRODUCTION = PRODUCTION;
exports.isDLLs = isDLLs;
exports.METADATA = METADATA;
// // skip this entry point for DLLS build
// if (appBoostrapFile) {
//     exports.appBoostrapFile = appBoostrapFile;
// }
