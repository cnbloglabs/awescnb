const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin')
const { openAnalyzer, cssExtract } = require('./options')

let plugins = []

let optimization = {
    usedExports: true,
    minimize: true,
    minimizer: [
        new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            parallel: true,
            extractComments: false,
            terserOptions: {
                ecma: undefined,
                parse: {},
                compress: {},
                mangle: true,
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            },
        }),
    ],
}

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

let lessLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
        },
    },
    'postcss-loader',
    'less-loader',
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
    lessLoader[0] = MiniCssExtractPluginLoader
}

const rules = [
    {
        test: /\.css$/,
        use: cssLoader,
    },
    {
        test: /\.scss$/,
        use: scssLoader,
    },
    {
        test: /\.less$/,
        use: lessLoader,
    },
]

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output,
    externals: { jquery: 'window.jquery' },
    module: { rules },
    plugins,
    optimization,
})
