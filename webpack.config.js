const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('src/server/public/js/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },      
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
}
