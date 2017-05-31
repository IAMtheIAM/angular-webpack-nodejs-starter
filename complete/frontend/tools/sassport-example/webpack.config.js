var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./main.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style", "css", require.resolve("../index.js")],

                // loader: ExtractTextPlugin.extract({
                //     loader: ["style", "css", require.resolve("../index.js")],
                // })
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin("[name].css")
    ]
}
