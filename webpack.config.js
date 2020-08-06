const webpack = require('webpack');
const path = require('path');

exports.default = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
    ]
  },
  optimization: {
    minimize: false,
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: 'react-bulma-components.min',
    //       test: /\.css$/,
    //       chunks: 'all',
    //       enforce: true,
    //     },
    //   },
    // },
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  }
}
