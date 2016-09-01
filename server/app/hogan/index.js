const path = require('path')
const express = require('express')
const http = require('http')

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')
const publicPath = path.resolve(processCwd, 'public')

const app = express()
const server = http.createServer(app)
const router = require('./router')

app.set('views', path.join(serverPath, 'app/mvc/views'))
app.set('view engine', 'html')
app.engine('html', require(path.join(serverPath, 'lib/express-hogan-cache')).createEngine())

app.use('/assets', express.static(path.join(publicPath, 'assets')))
app.use('/', router)

module.exports = {
  start: function (port) {
    app.set('port', port)
    server.listen(port, '0.0.0.0')
    server.on('error', (e) => console.log(e))
    server.on('listening', () => console.log(`[RMA PDF Service (Hogan)] ${port}`))
  }
}
