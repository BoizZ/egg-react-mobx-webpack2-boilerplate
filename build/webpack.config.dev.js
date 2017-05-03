'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.config')

config.plugins = config.plugins.concat([
  new ExtractTextPlugin({
    filename: 'css/[name].bundle.css',
    disable: true,
  })
])

config.output.filename = 'scripts/[name].bundle.js'

module.exports = config
