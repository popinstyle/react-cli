const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: {
        app:'./src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        // new CleanWebpackPlugin(['dist'])
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'output management',
            template: './index.html'
        })
    ]
};

module.exports = config;