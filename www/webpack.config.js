const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './dialogflow.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dialogflow.js'
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules', 'src']
    },
    plugins: [
        new CopyPlugin([
            { from: '/index.html', to: './' },
            { from: 'css/style.css', to: './' },
        ]),
    ],
};