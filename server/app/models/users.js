const Datastore = require('nedb')

const userDB = new Datastore({ filename: process.cwd() + '/.db/users.db', autoload: true })

function getAllUsers () {
  return new Promise((resolve, reject) => {
    userDB.find({}, (e, users) => {
      if (e) return reject(e)
      return resolve(users)
    })
  })
}

function getUser (id) {
  return new Promise((resolve, reject) => {
    userDB.find({ _id: id }, (e, user) => {
      if (e) return reject(e)
      return resolve(user)
    })
  })
}

module.exports = {
  getAllUsers,
  getUser
}
