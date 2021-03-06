'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

// const applicationEntries = process.env.NODE_ENV === 'development'
//   ? [ 'webpack-hot-middleware/client?reload=true' ]
//   : [ ];

const applicationEntries = [];

module.exports = {
  entry: {
    app: [ './src/index.tsx' ].concat(applicationEntries)
  },

  output: {
    path: path.join(__dirname, 'builder'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[name].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    '#inline-source-map',

  resolve: {
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.tsx',
      '.ts',
      '.js',
      '.json',
    ],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    stats: { chunks: false }
  },

  module: {
    loaders: [
      loaders.tsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
    ],
  },

  externals: {
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },

  postcss: postcssInit,
};
