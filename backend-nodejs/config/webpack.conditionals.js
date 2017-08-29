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
const isDLLs = ENVlc === 'build:dlls:jit';
const isDevServer = ENVlc === 'devserver:jit';

const ENV = process.env.NODE_ENV;
const PRODUCTION = ENV === 'production';
const DEBUG = ENV === 'development' || ENV === 'dev' || ENV === 'webpack';
const HOST = process.env.HOST || 'localhost';
const HMR = helpers.hasProcessFlag('hot');
const DEVSERVERPORT = process.env.PORT || 4100;
const WEBSERVERPORT = process.env.WEBSERVERPORT || 5000;

const METADATA = {
    host: HOST,
    devserverport: DEVSERVERPORT,
    webserverport: WEBSERVERPORT,
    ENV: ENV,
    baseUrl: '/',
    HMR: HMR
};


/*********************************************************************************************
 ********************************* Exports ***************************************************
 ********************************************************************************************/

exports.ENVlc = ENVlc;
exports.DEBUG = DEBUG;
exports.ENV = ENV;
exports.PRODUCTION = PRODUCTION;
exports.isDLLs = isDLLs;
exports.METADATA = METADATA;
exports.isDevServer = isDevServer;
