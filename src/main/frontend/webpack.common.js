var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.(html|css)$/,
                include: [ path.join(process.cwd(), 'src/app') ],
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                include: [ path.join(path.join(process.cwd(), 'src/app')) ],
                use: [ 'raw-loader', 'sass-loader' ]
            },
            {
                test: /\.scss$/,
                exclude: [ path.join(process.cwd(), 'src/app') ],
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader?minimize=true'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                exclude: [ path.join(process.cwd(), 'src/app') ],
                loader: ExtractTextPlugin.extract({ use: 'css-loader?minimize=true', fallback: 'style-loader' })
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new ExtractTextPlugin('style-bundle.css'),

        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './src/assets', to: 'assets' }
        ])
    ]
};