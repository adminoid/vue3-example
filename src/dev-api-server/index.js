const express = require('express')
const cors = require('cors')
const app = express()
const pages = require('./pages')

app.use(cors())

app.get('/api/pages/:page', function (req, res) {
  res.json(pages[req.params.page])
})

app.listen(8081, () => console.info('CORS-enabled dev api server listening on port 8081'))
