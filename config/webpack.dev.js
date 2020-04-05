const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template, themeName, sourceMap } = require('./options')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: sourceMap ? 'inline-source-map' : '',
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        hot: true,
        disableHostCheck: true,
        proxy: {},
        before() {},
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `src/templates/${template}.html`,
            inject: 'body',
            chunks: [`${themeName}`],
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
})
