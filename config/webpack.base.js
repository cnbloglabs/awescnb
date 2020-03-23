const { themeName } = require('./options')
const path = require('path')

module.exports = {
    entry: {
        index: './src/main.js',
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
