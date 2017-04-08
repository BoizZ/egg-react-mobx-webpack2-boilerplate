'use strict'

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')

module.exports = [
  new webpack.ProgressPlugin(),

  new HtmlWebpackPlugin({
    template: 'template/index.pug',
    filename: 'index.pug',
    filetype: 'pug'
  }),

  new HtmlWebpackPugPlugin(),

  new CopyWebpackPlugin([{ from: 'template' }])
]
