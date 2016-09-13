var path = require('path');

require('child_process').exec("npm config get prefix", function(err, stdout, stderr) {
   var nixLib = (process.platform.indexOf("win") === 0) ? "" : "lib"; // win/*nix support

   var webpackPath = path.resolve(path.join(stdout.replace("\n", ""), nixLib, 'node_modules', 'webpack', 'bin', 'webpack.js'));
   require(webpackPath);
});
