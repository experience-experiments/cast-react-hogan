
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const usersModel = require(path.join(serverPath, 'app/models/users'))

function getAllUsers () {
  return usersModel.getAllUsers()
}

function getUser (id) {
  return usersModel.getUser(id)
}

module.exports = {
  getAllUsers,
  getUser
}
