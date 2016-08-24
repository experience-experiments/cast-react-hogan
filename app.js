
const app = require('./server')

const http = require('http')

const port = process.env.PORT || 3001

app.set('port', port)

const server = http.createServer(app)

server.listen(app.get('port'), '0.0.0.0')
server.on('error', (e) => console.log(e))
server.on('listening', () => console.log(`[RMA PDF Service] ${app.get('port')}`))
