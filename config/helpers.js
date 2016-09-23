/**
 * @author: @AngularClass
 */
var path = require('path');

// Helper functions
// export var ROOT = path.resolve(__dirname, '..');

const paths = {
   appRoot: [path.resolve(__dirname, "../src")],
   happyPackTempDir: '../../cache/happypack',
   root: path.resolve(__dirname, '..')
};

function hasProcessFlag(flag) {
   return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
   return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]));
}

function root(args) {
   args = Array.prototype.slice.call(arguments, 0);
   return path.join.apply(path, [paths.root].concat(args));
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.paths = paths;

