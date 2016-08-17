
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const practicesModel = require(path.join(serverPath, 'app/models/practices'))

function getAllPractices () {
  return practicesModel.getAllPractices()
}

function getPractice (id) {
  return practicesModel.getPractice(id)
}

module.exports = {
  getAllPractices,
  getPractice
}
