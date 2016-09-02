
const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')
const skillsModel = require(path.join(mvcPath, 'models/skills'))

const getAllSkills = () => skillsModel.getAllSkills()
const setAllSkills = (skills) => skillsModel.setAllSkills(skills)
const getAllSkillsViewModel = () => skillsModel.getAllSkillsViewModel()
const getSkill = (id) => skillsModel.getSkill(id)
const setSkill = (id, skill) => skillsModel.setSkill(id, skill)
const getSkillViewModel = (id) => skillsModel.getSkillViewModel(id)

module.exports = {
  getAllSkills,
  setAllSkills,
  getAllSkillsViewModel,
  getSkill,
  setSkill,
  getSkillViewModel
}
