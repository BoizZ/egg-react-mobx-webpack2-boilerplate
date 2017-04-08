'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config')

config.plugins = config.plugins.concat([
  new ExtractTextPlugin({
    filename: '../public/css/[name].bundle.css',
    disable: true,
  })
])

config.output.filename = '../public/scripts/[name].bundle.js'

module.exports = config
