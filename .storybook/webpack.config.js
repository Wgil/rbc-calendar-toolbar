const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.less|\.css$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
