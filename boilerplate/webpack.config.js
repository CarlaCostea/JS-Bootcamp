// require path library

const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        // this prop chanegs the default file name: main
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // target just js files
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                } 
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}

// node js global variable : __dirname

// path needs an absolute path from the root of hard drive
// /Users/carla/Documents/Work/JS-Bootcamp/boilerplate/public/scripts

// to add babel with webpack : npm install babel-loader