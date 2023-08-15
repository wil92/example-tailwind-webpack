const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        ...(process.env.NODE_ENV === 'production' ? [new webpack.NormalModuleReplacementPlugin(/env\/env.js/, './production.js')] : []),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        port: !!process.env.PORT ? process.env.PORT : 9000,
        hot: true,
        liveReload: true
    }
};
