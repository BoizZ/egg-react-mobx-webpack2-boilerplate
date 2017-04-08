'use strict'

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('index.pug', {
        data: {
          content: 'hello egg!',
        },
      })
    }
  }
  return HomeController
}
