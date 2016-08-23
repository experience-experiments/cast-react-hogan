
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const practicesModel = require(path.join(mvcPath, 'models/practices'))

const getAllPractices = () => practicesModel.getAllPractices()
const getAllPracticesViewModel = () => practicesModel.getAllPracticesViewModel()
const getPractice = (id) => practicesModel.getPractice(id)
const getPracticeViewModel = (id) => practicesModel.getPracticeViewModel(id)

module.exports = {
  getAllPractices,
  getAllPracticesViewModel,
  getPractice,
  getPracticeViewModel
}
