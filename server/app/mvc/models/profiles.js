const Datastore = require('nedb')

const profilesDB = new Datastore({ filename: process.cwd() + '/.db/profiles.db', autoload: true })

const OPTIONS = { returnUpdatedDocs: true }

function getAllProfiles () {
  return new Promise((resolve, reject) => {
    profilesDB.find({}, (e, profiles) => {
      if (e) return reject(e)
      resolve(profiles)
    })
  })
}

function getAllProfilesViewModel () {
  return new Promise((resolve, reject) => {
    profilesDB.find({}).sort({ name: 1 }).exec((e, profiles) => {
      if (e) return reject(e)
      resolve(profiles)
    })
  })
}

function getProfile (id) {
  return new Promise((resolve, reject) => {
    profilesDB.findOne({ _id: id }, (e, profile) => {
      if (e) return reject(e)
      resolve(profile)
    })
  })
}

function setProfile (id, profile, meta) {
  const { metaData } = profile

  metaData.lastUpdateDate = meta.dateTime;
  metaData.lastUpdatedBy = meta.user.fullName;

  return new Promise((resolve, reject) => {
    profilesDB.update({ _id: id }, profile, OPTIONS, (e, n, profile) => {
      if (e) return reject(e)
      resolve(profile)
    })
  })
}

function getProfileViewModel (id) {
  return new Promise((resolve, reject) => {
    profilesDB.findOne({ _id: id }, (e, profile) => {
      if (e) return reject(e)
      resolve(profile)
    })
  })
}

module.exports = {
  getAllProfiles,
  getAllProfilesViewModel,
  getProfile,
  setProfile,
  getProfileViewModel
}
