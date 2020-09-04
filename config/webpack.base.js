const path = require('path')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { themeName } = require('./options')
const { eslint } = require('./options')

const entry = {
    index: './src/main.js',
    [themeName]: `./src/themes/${themeName}/index.js`,
    // acg: './src/themes/acg/index.js',
    // reacg: './src/themes/reacg/index.js',
    // gshang: './src/themes/gshang/index.js',
    // element: './src/themes/element/index.js',
    // simple: './src/themes/simple/index.js',
    // view: './src/themes/view/index.js',
}

const output = {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
}

const alias = {
    // mobx: __dirname + '/node_modules/mobx/lib/mobx.es6.js',
    '@': path.resolve('src'),
    '@awescnb': path.resolve('src/awescnb'),
    '@tools': path.resolve('src/assets/utils/tools'),
    '@cnblog': path.resolve('src/assets/utils/cnblog'),
    '@links': path.resolve('src/constants/links'),
    '@plugins': path.resolve('src/plugins'),
    '@constants': path.resolve('src/constants'),
    '@store': path.resolve('src/store'),
}

const plugins = [new HardSourceWebpackPlugin()]

const jsLoader = [
    // 'cache-loader',
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

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoader,
    },
    {
        test: /\.(gif|png|jpg|woff|woff2|svg|ttf|eot)$/i,
        use: 'url-loader',
    },
]

module.exports = {
    entry,
    output,
    module: { rules },
    resolve: { alias },
    plugins,
}
