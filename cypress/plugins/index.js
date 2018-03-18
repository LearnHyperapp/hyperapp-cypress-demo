const webpackPreprocessor = require('@cypress/webpack-preprocessor')
// hmm, why is the common webpack config leading to React.createElement?
// const webpackOptions = require('../../webpack.config.js')

const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: []
        }
      }
    ]
  }
}

module.exports = on => {
  on('file:preprocessor', webpackPreprocessor({ webpackOptions }))
}
