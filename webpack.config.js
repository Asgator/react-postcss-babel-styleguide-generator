var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = (function () {
    return {
        devtool: 'eval',
        entry: [
            './src/index'
        ],
        output: {
            path: path.join(__dirname, 'static'),
            filename: '/build/main.js',
            publicPath: '/static/'
        },
        plugins: [
            new FlowStatusWebpackPlugin(),
            new ExtractTextPlugin('./build/main.css'),
            new webpack.optimize.DedupePlugin()
        ],
        resolve: {
            extensions: ['', '.js', 'css']
        },
        eslint: {
            configFile: '.eslintrc'
        },
        module: {
            loaders: [
                {test: /\.(js)$/, loader: 'babel', exclude: /node_modules/},
                {test: /\.(js)$/, loader: 'eslint-loader', exclude: /node_modules/},
                {
                    test: /\.css$/,
                    exclude: /node_modules|www/,
                    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss')
                },
                {test: /\.(woff2?|ttf|eot|svg|png|jpg|gif|mp4|webm|webp)/, exclude: /node_modules/, loader: 'file-loader?name=[name].[hash].[ext]'}
            ]
        },
        postcss: function plugins() {
            return [require('autoprefixer')({ browsers: ['last 2 versions'] })];
        }
    };
})();
