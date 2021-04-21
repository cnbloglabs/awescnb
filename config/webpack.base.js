const path = require('path')
const { themeName, eslint } = require('../awes.config')
const dev = process.env.NODE_ENV === 'development'

const entry = dev
    ? `./src/themes/${themeName}/index.js`
    : {
          index: './src/main.js',
          [themeName]: `./src/themes/${themeName}/index.js`,
          //   acg: './src/themes/acg/index.js',
          //   bilibili: './src/themes/bilibili/index.js',
          //   csdn: './src/themes/csdn/index.js',
          //   demo: './src/themes/demo/index.js',
          //   element: './src/themes/element/index.js',
          //   geek: './src/themes/geek/index.js',
          //   reacg: './src/themes/reacg/index.js',
          //   silence: './src/themes/silence/index.js',
          //   simple: './src/themes/simple/index.js',
          //   view: './src/themes/view/index.js',
      }

const output = {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'dist'),
}

const alias = {
    '@': path.resolve('src'),
    '@awescnb': path.resolve('src/awescnb'),
    '@tools': path.resolve('src/assets/utils/tools'),
    '@cnblog': path.resolve('src/assets/utils/cnblog'),
    '@links': path.resolve('src/constants/links'),
    '@plugins': path.resolve('src/plugins'),
    '@constants': path.resolve('src/constants'),
    '@store': path.resolve('src/store'),
    '@config': path.resolve('src/config'),
}

const plugins = []

const jsLoader = [
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
                            esmodules: true,
                        },
                    },
                ],
            ],
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
        sideEffects: true,
    },
    {
        test: /\.(gif|png|jpg|woff|woff2|svg|ttf|eot)$/i,
        use: 'url-loader',
    },
]

module.exports = {
    entry,
    output,
    plugins,
    module: { rules },
    resolve: { alias },
}
