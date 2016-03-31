var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'static'),
    entry: {
        app: './app.ts',
        logs: './logs.ts',
        common: [
            "jquery",
            "angular",
            "angular-animate",
            "angular-route",
            "angular-cookies",
            "angular-aria",
            "angular-ui-bootstrap",
            "hammerjs",
            "moment",
            "bootstrap.css",
            "bootstrap.js",
            "./js/daterangepicker.js",
            "./js/angular-daterangepicker-plus.js",
            "./css/daterangepicker-bs3.css"
        ]},
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.(woff|eot|ttf|woff2)$/,
                loader: "file-loader" },
            {
                test: /\.html$/,
                loader: 'html',
            },
            { 
                test: /\.(png|gif|ico|svg)$/, 
                loader: "url-loader" 
            }
        ],
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        fallback: path.join(__dirname, 'node_modules'),
        alias: {
            'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
            'bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
            'jQuery': 'jquery'
        }
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "moment": "moment"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        })
    ],
    resolveLoader: {
        fallback: path.join(__dirname, 'node_modules')
    },
    devServer: {
        proxy: {
            '/elasticsearch/*': 'http://localhost',
            '/logs/*': 'http://localhost',
        },
    },
    devtool: "#source-map"
};
