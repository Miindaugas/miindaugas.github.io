const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractStylePlugin = require("extract-text-webpack-plugin");

const publicDirectory = 'dist';
const absolutePath = path.resolve(__dirname, publicDirectory);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: [
        './app.script.js'
    ],
    output: {
        path: absolutePath,
        publicPath: publicDirectory,
        filename: 'app.scripts.[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash:8].[ext]'
                }
            }]
        }, {
            test: /\.scss$/,
            use: ExtractStylePlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
    plugins: [
        new ExtractStylePlugin({
            filename: 'app.style.[hash:8].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Mindaugas Dangveckis',
            filename: path.resolve(__dirname, 'index.html')
        })
    ]
};