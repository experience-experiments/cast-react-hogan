
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const skillsModel = require(path.join(serverPath, 'app/models/skills'))

const getAllSkills = () => skillsModel.getAllSkills()
const getAllSkillsViewModel = () => skillsModel.getAllSkillsViewModel()
const getSkill = (id) => skillsModel.getSkill(id)
const getSkillViewModel = (id) => skillsModel.getSkillViewModel(id)

module.exports = {
  getAllSkills,
  getAllSkillsViewModel,
  getSkill,
  getSkillViewModel
}
