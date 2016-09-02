const Datastore = require('nedb')

const userDB = new Datastore({ filename: process.cwd() + '/.db/users.db', autoload: true })

const OPTIONS = { returnUpdatedDocs: true }

function userViewModel (user) {
  const { authorities } = user
  authorities.sort()
  return user
}

function getAllUsers () {
  return new Promise((resolve, reject) => {
    userDB.find({}, (e, users) => {
      if (e) return reject(e)
      resolve(users)
    })
  })
}

function setAllUsers (users) {
  throw Error /*
  return new Promise((resolve, reject) => {
    userDB.update(users, OPTIONS, (e, users) => {
      if (e) return reject(e)
      resolve(users)
    })
  }) */
}

function getAllUsersViewModel () {
  return new Promise((resolve, reject) => {
    userDB.find({}).sort({ name: 1 }).exec((e, users) => {
      if (e) return reject(e)
      resolve(users)
    })
  })
}

function getUser (id) {
  return new Promise((resolve, reject) => {
    userDB.findOne({ _id: id }, (e, user) => {
      if (e) return reject(e)
      resolve(user)
    })
  })
}

function setUser (id, user) {
  return new Promise((resolve, reject) => {
    userDB.update({ _id: id }, user, OPTIONS, (e, user) => {
      if (e) return reject(e)
      resolve(user)
    })
  })
}

function getUserViewModel (id) {
  return new Promise((resolve, reject) => {
    userDB.findOne({ _id: id }, (e, user) => {
      if (e) return reject(e)
      resolve(userViewModel(user))
    })
  })
}

module.exports = {
  getAllUsers,
  setAllUsers,
  getAllUsersViewModel,
  getUser,
  setUser,
  getUserViewModel
}
