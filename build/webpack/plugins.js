'use strict'

const webpack = require('webpack')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  new webpack.ProgressPlugin(),

  new HtmlWebpackPugPlugin(),

  new HtmlWebpackPlugin({
    template: 'template/index.pug',
    filename: '../view/index.pug',
    filetype: 'pug'
  }),

  new CopyWebpackPlugin([{
    from: 'template/files'
  }])
]
