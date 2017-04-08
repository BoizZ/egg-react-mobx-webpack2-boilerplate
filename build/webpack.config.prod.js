'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config')

config.plugins = config.plugins.concat([
  new ExtractTextPlugin({
    filename: '../public/css/[name].[hash].css',
    disable: false,
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  })
])

config.output.filename = '../public/scripts/[name].[hash].js'

module.exports = config
