const path = require('path')
const express = require('express')
const http = require('http')

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')
const publicPath = path.resolve(processCwd, 'public')

const layoutPath = path.join(serverPath, 'app/mvc/views')
const assetsPath = path.join(publicPath, 'assets')

const expressHoganCache = require('express-hogan-cache') // path.join(serverPath, 'lib/express-hogan-cache'))

const app = express()
const server = http.createServer(app)
const router = require('./router')

app.set('views', layoutPath)
app.set('view engine', 'html')
app.engine('html', expressHoganCache.createEngine())

app.use('/assets', express.static(assetsPath))
app.use('/', router)

module.exports = {
  start: function (port) {
    app.set('port', port)
    server.listen(port, '0.0.0.0')
    server.on('error', (e) => console.log(e))
    server.on('listening', () => console.log(`[RMA Cast React/Hogan (Hogan)] ${port}`))
  }
}
