const webpack = require('webpack')
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const friendlyFormatter = require('eslint-formatter-friendly')
const cwd = process.cwd()
const rootPath = resolve(cwd, './')

module.exports = {
  mode: 'development',
  entry: {
    index: resolve(__dirname, '../src/index.js')
  },
  resolve: {
    alias: {
      '@': resolve(rootPath, './src'), // for .(js|vue)
      '~@': resolve(rootPath, './src'), // for .css
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [

      {
        enforce: 'pre', // 预处理
        test: /\.(jsx?|vue)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: friendlyFormatter
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: resolve(__dirname, '../config') // 写到目录即可，文件名强制要求是postcss.config.js
              }
            }
          },
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
    ]
  },
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    port: 4000
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../src/html/index.html')
    })
  ]
}
