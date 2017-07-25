const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './public/src/js/main.js'),
    output: {
        path: path.resolve(__dirname, './public/out'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }]
    }
};