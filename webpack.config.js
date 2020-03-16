const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'production/public'),
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }, 
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /robotoLight.ttf$/, loader: 'file-loader?prefix=fonts/' },
      { test: /ubuntuMedium.ttf$/, loader: 'file-loader?prefix=fonts/' }
    ]
  },
  plugins: [new CleanPlugin(['production/public']), htmlPlugin],
  devServer: {
    historyApiFallback: true
  }
}
