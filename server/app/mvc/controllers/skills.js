
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const skillsModel = require(path.join(mvcPath, 'models/skills'))

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
