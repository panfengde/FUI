const config = require("./.config.js");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port:8081
    },
    entry: {
        //host: '0.0.0.0',
        index: './src/devIndex.tsx',
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
