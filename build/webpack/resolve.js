'use strict'

const path = require('path')

module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'front')
  ],
  extensions: [ '.ts', '.tsx', '.js', 'scss' ]
}
