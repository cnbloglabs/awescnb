// 使用 vite 代替
// "dev:webpack": "webpack serve --open --config config/webpack.dev.js",
const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const {
    template,
    themeName,
    sourceMap,
    openBrowser,
} = require('../awescnb.config')

const entry = `./src/themes/${themeName}/index.js`

const output = {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
}

const devServer = {
    compress: true,
    port: 3000,
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
        inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
]

const rules = [
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },

    {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
    },
]

module.exports = merge(baseWebpackConfig, {
    output,
    mode: 'development',
    target: 'web',
    entry,
    devtool: sourceMap ? 'eval-source-map' : '',
    devServer,
    plugins,
    module: { rules },
    optimization: {
        moduleIds: 'named',
    },
    stats: {
        entrypoints: false,
    },
})
