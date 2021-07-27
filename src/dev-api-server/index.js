const express = require('express')
const cors = require('cors')
const app = express()
const pages = require('./pages')

require('dotenv').config()
app.use(cors())

app.get('/api/pages/:page', function (req, res) {
  res.json(pages[req.params.page])
})

app.listen(process.env.API_PORT, () => console.info('CORS-enabled dev api server listening on port 8081'))
