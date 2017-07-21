var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.common');

config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular-router-loader'
    ]
});

config.plugins.push(
    // Workaround for angular/angular#11580. Can be ignored with @ngtools/webpack loader.
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.join(process.cwd(), 'src')
    )
);

module.exports = config;