const Datastore = require('nedb')

const profilesDB = new Datastore({ filename: process.cwd() + '/.db/profiles.db', autoload: true })

function getAllProfiles () {
  return new Promise((resolve, reject) => {
    profilesDB.find({}, (e, users) => {
      if (e) return reject(e)
      return resolve(users)
    })
  })
}

function getProfile (id) {
  return new Promise((resolve, reject) => {
    profilesDB.find({ _id: id }, (e, user) => {
      if (e) return reject(e)
      return resolve(user)
    })
  })
}

module.exports = {
  getAllProfiles,
  getProfile
}
