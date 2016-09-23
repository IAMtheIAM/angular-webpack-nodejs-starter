/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.development.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.production.js');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test.js');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.development.js');
}
