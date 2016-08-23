
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const usersModel = require(path.join(mvcPath, 'models/users'))

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
