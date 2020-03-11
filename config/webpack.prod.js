const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
module.exports = merge(baseWebpackConfig, {

    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
})
