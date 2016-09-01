
const express = require('express')
const http = require('http')
const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const router = require('./router')

app.use(cors({ origin: true }))
app.use(bodyParser.json());
app.use('/api', router)

module.exports = {
  start: function (port) {
    app.set('port', port)
    server.listen(port, '0.0.0.0')
    server.on('error', (e) => console.log(e))
    server.on('listening', () => console.log(`[RMA PDF Service (API)] ${port}`))
  }
}
