const path = require('path')
const webpack = require('webpack')

const processCwd = process.cwd()
const clientPath = path.resolve(processCwd, 'client')
const assetsPath = path.resolve(processCwd, 'public/assets')

module.exports = {
  context: processCwd,
  devtool: 'source-map',
  entry: {
    index: [
      path.join(clientPath, 'src/config/index.js'),
      path.join(clientPath, 'src/app.js')
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    publicPath: assetsPath
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules\/(?!(express-hogan-cache|hogan-cache|react-draft-editor)).*/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      preserveComments: false
    })
  ]
}
