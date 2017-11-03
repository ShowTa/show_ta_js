import path from 'path'

const src  = path.resolve(__dirname, 'src/client')
const dist = path.resolve(__dirname, 'dist')

export default {
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  plugins: []
}