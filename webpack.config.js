const webpack = require('webpack');
const path = require('path');

exports.default = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bulma-react.js',
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|build)/,
      },
    ]
  },
  externals: ['clsx', 'react', 'prop-types'],
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
