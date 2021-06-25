const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseWebpackConfig = require('./webpack.base')
const BundleAnalyzer = require('webpack-bundle-analyzer')
const { merge } = require('webpack-merge')
const { themeName, openAnalyzer, cssExtract } = require('../awescnb.config')

const entry = {
    // index: './src/awescnb/load.js', /* 入口文件 */
    [themeName]: `./src/themes/${themeName}/index.js`,
    /* 同时构建所有皮肤 ↓ */
    // demo: './src/themes/demo/index.js',
    // bilibili: './src/themes/bilibili/index.js',
    // csdn: './src/themes/csdn/index.js',
    // element: './src/themes/element/index.js',
    // geek: './src/themes/geek/index.js',
    // reacg: './src/themes/reacg/index.js',
    // silence: './src/themes/silence/index.js',
    // simple: './src/themes/simple/index.js',
    // view: './src/themes/view/index.js',
    // bilibiliv1: './src/themes/bilibiliv1/index.js',
}

let output = {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
}

let plugins = []

const optimization = {
    providedExports: true,
    usedExports: true,
    minimize: true,
    concatenateModules: true,
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
                keep_classnames: false,
                keep_fnames: false,
                safari10: false,
                format: {
                    comments: false,
                },
            },
        }),
    ],
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
    plugins.push(
        new BundleAnalyzer.BundleAnalyzerPlugin({
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
        },
    }
    cssLoader[0] = MiniCssExtractPluginLoader
    scssLoader[0] = MiniCssExtractPluginLoader
    lessLoader[0] = MiniCssExtractPluginLoader
}

plugins.push(
    new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
    }),
)

const rules = [
    {
        test: /\.css$/i,
        use: cssLoader,
    },
    {
        test: /\.scss$/i,
        use: scssLoader,
    },
    {
        test: /\.less$/i,
        use: lessLoader,
    },
]

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    target: 'browserslist',
    entry,
    output,
    externals: { jquery: 'window.jquery' },
    module: { rules },
    plugins,
    optimization,
})
