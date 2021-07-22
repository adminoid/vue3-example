const pages = require('./pages')

module.exports = (app, server) => {
  app.get('/api/pages/:page',
    (
      req,
      res
    ) => {
      res.json(pages[req.params.page])
    })
}
