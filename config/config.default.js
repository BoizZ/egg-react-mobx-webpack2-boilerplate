'use strict'

module.exports = appInfo => {
  const config = {
    view: {
      mapping: {
        '.pug': 'pug',
      },
    }
  }

  // should change to your own
  config.keys = appInfo.name + '_1490342230372_9527'

  return config
}
