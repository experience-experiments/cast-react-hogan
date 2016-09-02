
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const usersModel = require(path.join(mvcPath, 'models/users'))

const getAllUsers = () => usersModel.getAllUsers()
const setAllUsers = (users) => usersModel.setAllUsers(users)
const getAllUsersViewModel = () => usersModel.getAllUsersViewModel()
const getUser = (id) => usersModel.getUser(id)
const setUser = (id, user) => usersModel.setUser(id, user)
const getUserViewModel = (id) => usersModel.getUserViewModel(id)

module.exports = {
  getAllUsers,
  setAllUsers,
  getAllUsersViewModel,
  getUser,
  setUser,
  getUserViewModel
}
