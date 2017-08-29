/*********************************************************************************************
 *******************************  Webpack Requires ******************************************
 ********************************************************************************************/
import * as helpers from './helpers.js';

/*********************************************************************************************
 *******************************  Webpack Constants/Vars ******************************************
 ********************************************************************************************/
const ENVlc = process.env.npm_lifecycle_event;
const AOT = ENVlc === 'devserver:aot' || ENVlc === 'build:debug:aot' || ENVlc === 'build:production:aot';
const JIT = ENVlc === 'devserver:jit' || ENVlc === 'build:debug:jit' || ENVlc === 'build:debug:jit:watch' || ENVlc === 'build:production:jit' || ENVlc === 'build:production:jit:watch';
const isDLLs = ENVlc === 'build:dlls:jit';
const isDevServer = ENVlc === 'devserver:jit';
const localIP = require('my-local-ip')();
// console.log(localIP);

const ENV = process.env.NODE_ENV;
const isProduction = ENV === 'production';
const DEBUG = isProduction === false;
const HOST = process.env.HOST || localIP || 'localhost';
const isStats = process.env.STATS === 'true';
const HMR = helpers.hasProcessFlag('hot');
const DEVSERVERPORT = process.env.PORT || 4000;
const WEBSERVERPORT = process.env.WEBSERVERPORT || 5000;
const susyIsDevServer = DEBUG
   ? 'show'
   : 'hide';



const METADATA = {
   host         : HOST,
   devserverport: DEVSERVERPORT,
   webserverport: WEBSERVERPORT,
   ENV          : ENV,
   baseUrl      : '/',
   HMR          : HMR
};

/*********************************************************************************************
 ********************************* Exports ***************************************************
 ********************************************************************************************/
module.exports = {
   // exports.sassVarsConfig: sassVarsConfig;
   ENVlc: ENVlc,
   AOT: AOT,
   JIT: JIT,
   DEBUG: DEBUG,
   ENV: ENV,
   isProduction: isProduction,
   isDLLs: isDLLs,
   METADATA: METADATA,
   isDevServer: isDevServer,
   susyIsDevServer: susyIsDevServer,
   isStats: isStats
}

