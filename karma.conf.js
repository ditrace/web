// Karma configuration
// Generated on Wed Sep 09 2015 11:00:16 GMT+0500 (YEKT)
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
webpackConfig.devtool = 'inline-source-map';
webpackConfig.entry = {};
var filteredPlugins = webpackConfig.plugins.filter(function(plugin) {
  return !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
});

filteredPlugins.push(
  new webpack.SourceMapDevToolPlugin({
    test: /\.(js|css|ts)($|\?)/i
  })
);

webpackConfig.plugins = filteredPlugins;
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './tests/run.ts'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './tests/**/*.ts': ['webpack', 'sourcemap']
    },

    plugins: [
      "karma-webpack",
      "karma-jasmine",
      "karma-webpack",
      "karma-chrome-launcher",
      "karma-sourcemap-loader",
      "karma-phantomjs-launcher"
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}