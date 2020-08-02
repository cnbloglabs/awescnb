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
        simple: './src/themes/simple/index.js',
        view: './src/themes/view/index.js',
        [themeName]: `./src/themes/${themeName}/index.js`,
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoader,
            },
            {
                test: /\.(gif|png|jpg|woff|woff2|svg|ttf|eot)$/i,
                use: 'url-loader',
            },
        ],
    },
    resolve: {
        alias: {
            // mobx: __dirname + '/node_modules/mobx/lib/mobx.es6.js',
            '@': path.resolve('src'),
            '@awescnb': path.resolve('src/awescnb'),
            '@tools': path.resolve('src/assets/utils/tools'),
            '@cnblog': path.resolve('src/assets/utils/cnblog'),
            '@plugins': path.resolve('src/plugins'),
            '@constants': path.resolve('src/constants'),
            '@store': path.resolve('src/store'),
        },
    },
}
