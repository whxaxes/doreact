const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const entry = {};

fs.readdirSync('./src')
  .filter(dir => fs.lstatSync('./src/' + dir).isDirectory() && fs.existsSync('./src/' + dir + '/index.jsx'))
  .forEach(dir => entry[dir] = ['./src/' + dir + '/index']);

module.exports = {
  devtool: 'eval',

  entry,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};