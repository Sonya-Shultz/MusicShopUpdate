const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './jsFiles/url.js',
    devServer:{
        liveReload: true,
        hot: true,
    },
    devtool:'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ["style-loader","css-loader"]
        },],
    },
    plugins: [
        new HTMLWebPackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new copyWebpackPlugin({
            patterns: [
                { from: 'img', to: 'img'},
            ],
        }),
    ]
};