'use strict'

const path = require('path')

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'front'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
}
