const Datastore = require('nedb')

const skillsDB = new Datastore({ filename: process.cwd() + '/.db/skills.db', autoload: true })

const OPTIONS = { returnUpdatedDocs: true }

function skillViewModel (skill) {
  const { categories } = skill
  categories.sort((alpha, omega) => {
    const a = alpha.name.toLowerCase()
    const o = omega.name.toLowerCase()
    return (a < o) ? -1 : (a > o) ? +1 : 0
  })
  categories.forEach((category) => category.skills.sort())
  return skill
}

function getAllSkills () {
  return new Promise((resolve, reject) => {
    skillsDB.find({}, (e, skills) => {
      if (e) return reject(e)
      resolve(skills)
    })
  })
}

function setAllSkills (skills) {
  throw Error /*
  return new Promise((resolve, reject) => {
    skillsDB.update(skills, OPTIONS, (e, skills) => {
      if (e) return reject(e)
      resolve(skills)
    })
  }) */
}

function getAllSkillsViewModel () {
  return new Promise((resolve, reject) => {
    skillsDB.find({}).sort({ name: 1 }).exec((e, skills) => {
      if (e) return reject(e)
      resolve(skills)
    })
  })
}

function getSkill (id) {
  return new Promise((resolve, reject) => {
    skillsDB.findOne({ _id: id }, (e, skill) => {
      if (e) return reject(e)
      resolve(skill)
    })
  })
}

function setSkill (id, skill) {
  return new Promise((resolve, reject) => {
    skillsDB.findOne({ _id: id }, skill, OPTIONS, (e, skill) => {
      if (e) return reject(e)
      resolve(skill)
    })
  })
}

function getSkillViewModel (id) {
  return new Promise((resolve, reject) => {
    skillsDB.findOne({ _id: id }, (e, skill) => { // does nedb sort on deep fields?
      if (e) return reject(e)
      resolve(skillViewModel(skill))
    })
  })
}

module.exports = {
  getAllSkills,
  setAllSkills,
  getAllSkillsViewModel,
  getSkill,
  setSkill,
  getSkillViewModel
}
