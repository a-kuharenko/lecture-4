'use strict'

const { createServer } = require('http')
const { readFile } = require('fs')
const { join } = require('path')

const PORT = 8000

const server = createServer((req, res) => {
  const path = req.url === '/' ? 'index.html' : req.url

  readFile(join(__dirname, '../dist', path), (err, data) => {
    if (err) {
      res.statusCode = 404
      res.end()
      return
    }
    res.statusCode = 200
    res.end(data)
  })
})

server.listen(PORT, () => console.log(`Server listening on :${PORT}`))
