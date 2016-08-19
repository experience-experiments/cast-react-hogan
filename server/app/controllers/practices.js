
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const practicesModel = require(path.join(serverPath, 'app/models/practices'))

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
