const config = require("./.config.js");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        index: './src/devIndex.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: config.module,
    resolve: config.resolve,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dev模式',
        }),

    ],
};
