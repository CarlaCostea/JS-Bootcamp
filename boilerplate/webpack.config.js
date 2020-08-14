// require path library
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts')
    }
}

// node js global variable : __dirname

// path needs an absolute path from the root of hard drive
// /Users/carla/Documents/Work/JS-Bootcamp/boilerplate/public/scripts