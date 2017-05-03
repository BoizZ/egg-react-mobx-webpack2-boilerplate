'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    },
    {
      enforce: 'pre',
      test: /\.tsx?$/,
      loader: 'tslint-loader'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
    },
    {
      test: /\.(eot|woff|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=100000'
    }
  ]
}
