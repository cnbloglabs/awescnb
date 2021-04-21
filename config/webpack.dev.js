const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    template,
    themeName,
    sourceMap,
    openBrowser,
} = require('../awes.config')

const devServer = {
    compress: true,
    port: 8080,
    host: 'localhost',
    open: openBrowser,
    hot: true,
    quiet: true,
    clientLogLevel: 'silent',
}

const plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `public/templates/${template}.html`,
        chunks: [`${themeName}`],
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
]

const rules = [
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
            // 'postcss-loader',
        ],
    },
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                },
            },
            // 'postcss-loader',
            'sass-loader',
        ],
    },
    {
        test: /\.less$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                },
            },
            // 'postcss-loader',
            'less-loader',
        ],
    },
]

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: sourceMap ? 'inline-source-map' : '',
    devServer,
    plugins,
    module: { rules },
})
