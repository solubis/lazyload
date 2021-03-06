
var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        loader: ['./src/loader.js'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js'
    },
    cache: true,
    debug: false,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js', '.jsx', '.rjsx']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts' },
            { test: /\.(png|jpg|gif)$/, loader: 'url' },
            { test: /\.react\.jsx$/, loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                },
                exclude: /node_modules/,
            },
            { test: /^(.(?!react))*\.jsx?$/, loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    cacheDirectory: true,
                        plugins: [
                        'transform-runtime',
                        ['transform-react-jsx', {'pragma': 'element'}]
                    ]
                },
                exclude: /node_modules/,
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[\s\S]+)?$/, loader: 'url' }
        ]
    },
    devServer: {
        contentBase: './'
    },
    plugins: [
    ]
};