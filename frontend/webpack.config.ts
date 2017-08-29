/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.development.js
switch (process.env.NODE_ENV) {
   case 'prod':
   case 'production':
      module.exports = require('./config/webpack.production.ts');
      break;
   case 'test':
   case 'testing':
      module.exports = require('./config/webpack.test.ts');
      break;
   case 'debug':
   case 'debug-production':
      module.exports = require('./config/webpack.debug-production.ts');
      break;
   case 'dll':
   case 'dlls':
      module.exports = require('./config/webpack.dll.ts');
      break;
   case 'webpack':
   case 'dev':
   case 'development':
   default:
      module.exports = require('./config/webpack.development.ts');
}
