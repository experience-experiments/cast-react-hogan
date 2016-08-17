
const path = require('path')
const serverPath = path.resolve(process.cwd(), 'server')
const skillsModel = require(path.join(serverPath, 'app/models/skills'))

function getAllSkills () {
  return skillsModel.getAllSkills()
}

function getSkill (id) {
  return skillsModel.getSkill(id)
}

module.exports = {
  getAllSkills,
  getSkill
}
