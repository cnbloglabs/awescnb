const path = require('path')
const { eslint } = require('../awescnb.config')

const alias = {
    assets: path.resolve('src/assets'),
    awescnb: path.resolve('src/awescnb'),
    options: path.resolve('src/options'),
    constants: path.resolve('src/constants'),
    plugins: path.resolve('src/plugins'),
    style: path.resolve('src/style'),
    utils: path.resolve('src/utils'),
}

const scriptLoader = [
    {
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: false,
                        loose: true,
                        targets: {
                            esmodules: false,
                        },
                    },
                ],
            ],
        },
    },
]

if (eslint) {
    scriptLoader.push({
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
        use: scriptLoader,
    },
    {
        test: /\.(gif|png|jpg|woff|woff2|svg|ttf|eot)$/i,
        use: 'url-loader',
    },
]

module.exports = {
    module: { rules },
    resolve: { alias },
}
