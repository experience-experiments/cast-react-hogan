
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const profilesModel = require(path.join(serverPath, 'app/models/profiles'))

const getAllProfiles = () => profilesModel.getAllProfiles()
const getAllProfilesViewModel = () => profilesModel.getAllProfilesViewModel()
const getProfile = (id) => profilesModel.getProfile(id)
const getProfileViewModel = (id) => profilesModel.getProfileViewModel(id)

module.exports = {
  getAllProfiles,
  getAllProfilesViewModel,
  getProfile,
  getProfileViewModel
}
