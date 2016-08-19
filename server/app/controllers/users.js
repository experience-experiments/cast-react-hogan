
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const usersModel = require(path.join(serverPath, 'app/models/users'))

const getAllUsers = () => usersModel.getAllUsers()
const getAllUsersViewModel = () => usersModel.getAllUsersViewModel()
const getUser = (id) => usersModel.getUser(id)
const getUserViewModel = (id) => usersModel.getUserViewModel(id)

module.exports = {
  getAllUsers,
  getAllUsersViewModel,
  getUser,
  getUserViewModel
}
