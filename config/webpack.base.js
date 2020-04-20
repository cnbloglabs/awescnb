const path = require('path')
const { themeName } = require('./options')
const { eslint } = require('./options')

const jsLoader = [
    {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
]

if (eslint) {
    jsLoader.push({
        loader: 'eslint-loader',
        options: {
            cache: true,
        },
    })
}

module.exports = {
    entry: {
        index: './src/main.js',
        acg: './src/themes/acg/index.js',
        reacg: './src/themes/reacg/index.js',
        gshang: './src/themes/gshang/index.js',
        element: './src/themes/element/index.js',
        [themeName]: `./src/themes/${themeName}/index.js`,
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', 'dist'),
    },
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
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoader,
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            '@awescnb': path.resolve('src/awescnb'),
            '@tools': path.resolve('src/assets/utils/tools'),
            '@plugins': path.resolve('src/plugins'),
            '@constants': path.resolve('src/constants'),
        },
    },
}
