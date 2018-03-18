const path = require('path')
const ROOT = path.resolve(__dirname)

module.exports = {
  devtool: 'cheap-eval-source-map',

  entry: path.resolve(ROOT, 'src', 'index.js'),

  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: ROOT,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /src/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  target: 'web',

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: path.resolve(ROOT, 'public'),
  },
}
