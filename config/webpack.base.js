const path = require('path')

module.exports = {
    entry:{
        index: './src/main.js',
        reacg: './src/themes/reacg/index.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, '..', 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            // api: process.env.NODE_ENV === 'production' ? './api.js' : './api-dev.js',
        },
    },
}
