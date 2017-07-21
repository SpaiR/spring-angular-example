var webpack = require('webpack');
var path = require('path');
var ngtools = require('@ngtools/webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var config = require('./webpack.common');

config.module.rules.push({
    test: /\.ts$/,
    loader: '@ngtools/webpack'
});

config.plugins.push(
    new ngtools.AotPlugin({
        tsConfigPath: path.join(process.cwd(), 'tsconfig.json')
    }),

    new webpack.optimize.UglifyJsPlugin({
        comments: false
    }),

    new CleanWebpackPlugin('dist', {
        verbose: true
    }),

    new webpack.EnvironmentPlugin({
        PRODUCTION: true
    })
);

module.exports = config;
