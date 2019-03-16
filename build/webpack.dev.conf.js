const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: resolve(__dirname, '../src/index.js')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    port: 4000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../src/html/index.html')
    })
  ]
}
