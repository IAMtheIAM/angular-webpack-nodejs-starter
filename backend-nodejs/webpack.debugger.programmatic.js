var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

// Set environment variables here...
// process.env.NODE_ENV = 'production';
var webpackConfig = require('./webpack.config.js');

webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(webpackConfig); // load webpack
// run dev-server
var server = new WebpackDevServer(compiler, {
   contentBase: "/",
   publicPath: "/",
   hot: true,
   inline: true,
});
server.listen(9191);
