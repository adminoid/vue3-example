const pages = require('./pages')
const changeCase = require('change-case')

module.exports = (app, server) => {
  app.get('/api/pages/:page',
    (
      req,
      res
    ) => {
      const componentName = changeCase.pascalCase(req.params.page)
      res.json({
        component: pages[componentName]
      })
    })
}
