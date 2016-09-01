const path = require('path')

const express = require('express')

const bodyParser = require('body-parser')

const serverPath = path.resolve(process.cwd(), 'server')

const apiPath = path.join(serverPath, 'app/api')

const app = express()
const router = require(apiPath)

app.use(bodyParser.json());
app.use('/api', api)

module.exports = app
