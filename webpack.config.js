const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
     path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    },
    devServer: {
        port: 8080,
    },
    plugins: [new HtmlWebpackPlugin()],
};