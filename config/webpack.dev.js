const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        open: false,
        hot: false,
        disableHostCheck: true,
        proxy: {},
        before() {},
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/templates/index.html',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
})
