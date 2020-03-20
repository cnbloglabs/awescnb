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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        hot: false,
        disableHostCheck: true,
        proxy: {},
        before() {},
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/templates/post.html',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
})
