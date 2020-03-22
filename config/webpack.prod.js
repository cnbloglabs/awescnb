const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

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
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            // 模块大小默认显示在报告中。
            // 应该是`stat`，`parsed`或者`gzip`中的一个。
            defaultSizes: 'parsed',
            // 在默认浏览器中自动打开报告
            openAnalyzer: true,
            // 如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false,
            // 如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            // 相对于捆绑输出目录。
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info',
        }),
    ],
    externals: {
        jquery: 'window.jquery',
    },
})
