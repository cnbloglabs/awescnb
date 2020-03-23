const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { template, themeName } = require('./options')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // devtool: 'eval-source-map',
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
        host: 'localhost',
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
            template: `src/templates/${template}.html`,
            inject: 'body',
            chunks: ['index', `${themeName}`],
        }),
        new webpack.HotModuleReplacementPlugin({}),
    ],
})
