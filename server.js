const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, quiet: !dev })
const handle = app.getRequestHandler()

let httpServer

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  httpServer = server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

// Use this for testing
// might have to wait couple seconds 
// for it to warm up before it's defined
module.exports = httpServer
