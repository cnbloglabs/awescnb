const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const { openAnalyzer } = require('./options')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const plugins = [new CleanWebpackPlugin()]

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

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
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
        ],
    },
    plugins,
    externals: {
        jquery: 'window.jquery',
    },
})
