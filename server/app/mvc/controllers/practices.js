
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const practicesModel = require(path.join(mvcPath, 'models/practices'))

const getAllPractices = () => practicesModel.getAllPractices()
const setAllPractices = (practices) => practicesModel.setAllPractices(practices)
const getAllPracticesViewModel = () => practicesModel.getAllPracticesViewModel()
const getPractice = (id) => practicesModel.getPractice(id)
const setPractice = (id, practice) => practicesModel.setPractice(id, practice)
const getPracticeViewModel = (id) => practicesModel.getPracticeViewModel(id)

module.exports = {
  getAllPractices,
  setAllPractices,
  getAllPracticesViewModel,
  getPractice,
  setPractice,
  getPracticeViewModel
}
