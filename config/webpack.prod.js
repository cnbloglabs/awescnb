const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const { openAnalyzer, cssExtract } = require('./options')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const plugins = [
    // new CleanWebpackPlugin()
]
let output = {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
}
let cssLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
        },
    },
    'postcss-loader',
]
let scssLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
        },
    },
    'postcss-loader',
    'sass-loader',
]

if (openAnalyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info',
        }),
    )
}

if (cssExtract) {
    output.path = path.join(__dirname, '..', 'dist/ext')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    )
    const MiniCssExtractPluginLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
        },
    }
    cssLoader[0] = MiniCssExtractPluginLoader
    scssLoader[0] = MiniCssExtractPluginLoader
}

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output,
    plugins,
    externals: {
        jquery: 'window.jquery',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoader,
            },
            {
                test: /\.scss$/,
                use: scssLoader,
            },
        ],
    },
})
