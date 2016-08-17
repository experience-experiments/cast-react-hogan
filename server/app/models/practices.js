const Datastore = require('nedb')

const practicesDB = new Datastore({ filename: process.cwd() + '/.db/practices.db', autoload: true })

function getAllPractices () {
  return new Promise((resolve, reject) => {
    practicesDB.find({}, (e, users) => {
      if (e) return reject(e)
      return resolve(users)
    })
  })
}

function getPractice (id) {
  return new Promise((resolve, reject) => {
    practicesDB.find({ _id: id }, (e, user) => {
      if (e) return reject(e)
      return resolve(user)
    })
  })
}

module.exports = {
  getAllPractices,
  getPractice
}
