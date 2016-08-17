
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const profilesModel = require(path.join(serverPath, 'app/models/profiles'))

function getAllProfiles () {
  return profilesModel.getAllProfiles()
}

function getProfile (id) {
  return profilesModel.getProfile(id)
}

module.exports = {
  getAllProfiles,
  getProfile
}
