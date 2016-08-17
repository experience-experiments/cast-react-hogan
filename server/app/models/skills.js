const Datastore = require('nedb')

const skillsDB = new Datastore({ filename: process.cwd() + '/.db/skills.db', autoload: true })

function getAllSkills () {
  return new Promise((resolve, reject) => {
    skillsDB.find({}, (e, users) => {
      if (e) return reject(e)
      return resolve(users)
    })
  })
}

function getSkill (id) {
  return new Promise((resolve, reject) => {
    skillsDB.find({ _id: id }, (e, user) => {
      if (e) return reject(e)
      return resolve(user)
    })
  })
}

module.exports = {
  getAllSkills,
  getSkill
}
