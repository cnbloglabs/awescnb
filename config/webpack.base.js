const { themeName } = require('./options')
const path = require('path')

module.exports = {
    entry: {
        index: './src/main.js',
        reacg: './src/themes/reacg/index.js',
        gshang: './src/themes/gshang/index.js',
        [themeName]: `./src/themes/${themeName}/index.js`,
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '..', 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
        },
    },
}
