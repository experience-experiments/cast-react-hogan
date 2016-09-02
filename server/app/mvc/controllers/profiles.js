
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const profilesModel = require(path.join(mvcPath, 'models/profiles'))

const getAllProfiles = () => profilesModel.getAllProfiles()
const setAllProfiles = (profiles, meta) => profilesModel.setAllProfiles(profiles, meta)
const getAllProfilesViewModel = () => profilesModel.getAllProfilesViewModel()
const getProfile = (id) => profilesModel.getProfile(id)
const setProfile = (id, profile, meta) => profilesModel.setProfile(id, profile, meta)
const getProfileViewModel = (id) => profilesModel.getProfileViewModel(id)

module.exports = {
  getAllProfiles,
  setAllProfiles,
  getAllProfilesViewModel,
  getProfile,
  setProfile,
  getProfileViewModel
}
