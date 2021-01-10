const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    template,
    themeName,
    sourceMap,
    // openBrowser
} = require('./options')

const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    // host: 'localhost',
    // open: openBrowser,
    // hot: true,
    // quiet: false,
    // disableHostCheck: true,
    // proxy: {},
    // before() {},
}

const plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `src/templates/${template}.html`,
        inject: 'body',
        chunks: [`${themeName}`],
    }),
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
]

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: sourceMap ? 'inline-source-map' : '',
    devServer,
    plugins,
    module: { rules },
})
