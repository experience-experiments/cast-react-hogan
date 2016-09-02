const path = require('path')
const mvcPath = path.resolve(process.cwd(), 'server/app/mvc')

const practicesController = require(path.join(mvcPath, 'controllers/practices'))
const profilesController = require(path.join(mvcPath, 'controllers/profiles'))
const skillsController = require(path.join(mvcPath, 'controllers/skills'))
const usersController = require(path.join(mvcPath, 'controllers/users'))

const express = require('express')

const router = express.Router()

function getMeta () {
  return {
    dateTime: new Date().valueOf(),
    user: {
      fullName: 'PDF Service'
    }
  }
}

router.get('/v1/users', (req, res) => {
  usersController.getAllUsers()
    .then((users) => res.json(users))
    .catch((e) => res.send(e))
})

router.patch('/v1/users', (req, res) => {
  const users = req.body

  usersController.setAllUsers(users)
    .then((users) => res.json(users))
    .catch((e) => res.send(e))
})

router.get('/v1/users/view-model', (req, res) => {
  usersController.getAllUsersViewModel()
    .then((users) => res.json(users))
    .catch((e) => res.send(e))
})

router.get('/v1/users/:user', (req, res) => {
  const userId = req.params.user
  usersController.getUser(userId)
    .then((user) => res.json(user))
    .catch((e) => res.send(e))
})

router.patch('/v1/users/:user', (req, res) => {
  const userId = req.params.user
  const user = req.body

  usersController.setUser(userId, user)
    .then((user) => res.json(user))
    .catch((e) => res.send(e))
})

router.get('/v1/users/:user/view-model', (req, res) => {
  const userId = req.params.user
  usersController.getUserViewModel(userId)
    .then((user) => res.json(user))
    .catch((e) => res.send(e))
})

router.get('/v1/practices', (req, res) => {
  practicesController.getAllPractices()
    .then((practices) => res.json(practices))
    .catch((e) => res.send(e))
})

router.patch('/v1/practices', (req, res) => {
  const practices = req.body

  practicesController.setAllPractices(practices)
    .then((practices) => res.json(practices))
    .catch((e) => res.send(e))
})

router.get('/v1/practices/view-model', (req, res) => {
  practicesController.getAllPracticesViewModel()
    .then((practices) => res.json(practices))
    .catch((e) => res.send(e))
})

router.get('/v1/practices/:practice', (req, res) => {
  const practiceId = req.params.practice
  practicesController.getPractice(practiceId)
    .then((practice) => res.json(practice))
    .catch((e) => res.send(e))
})

router.patch('/v1/practices/:practice', (req, res) => {
  const practiceId = req.params.practice
  const practice = req.body

  practicesController.setPractice(practiceId, practice)
    .then((practice) => res.json(practice))
    .catch((e) => res.send(e))
})

router.get('/v1/practices/:practice/view-model', (req, res) => {
  const practiceId = req.params.practice
  practicesController.getPracticeViewModel(practiceId)
    .then((practice) => res.json(practice))
    .catch((e) => res.send(e))
})

router.get('/v1/profiles', (req, res) => {
  profilesController.getAllProfiles()
    .then((profiles) => res.json(profiles))
    .catch((e) => res.send(e))
})

router.patch('/v1/profiles', (req, res) => {
  const profiles = req.body

  profilesController.setAllProfiles(profiles, getMeta())
    .then((profiles) => res.json(profiles))
    .catch((e) => res.send(e))
})

router.get('/v1/profiles/view-model', (req, res) => {
  profilesController.getAllProfilesViewModel()
    .then((profiles) => res.json(profiles))
    .catch((e) => res.send(e))
})

router.patch('/v1/profiles/:profile', (req, res) => {
  const profileId = req.params.profile
  const profile = req.body

  profilesController.setProfile(profileId, profile, getMeta())
    .then((profile) => res.json(profile))
    .catch((e) => res.send(e))
})

router.get('/v1/profiles/:profile/view-model', (req, res) => {
  const profileId = req.params.profile
  profilesController.getProfileViewModel(profileId)
    .then((profile) => res.json(profile))
    .catch((e) => res.send(e))
})

router.get('/v1/skills', (req, res) => {
  skillsController.getAllSkills()
    .then((skills) => res.json(skills))
    .catch((e) => res.send(e))
})

router.patch('/v1/skills', (req, res) => {
  const skills = req.body

  skillsController.setAllSkills(skills)
    .then((skills) => res.json(skills))
    .catch((e) => res.send(e))
})

router.get('/v1/skills/view-model', (req, res) => {
  skillsController.getAllSkillsViewModel()
    .then((skills) => res.json(skills))
    .catch((e) => res.send(e))
})

router.get('/v1/skills/:skill', (req, res) => {
  const skillId = req.params.skill
  skillsController.getSkill(skillId)
    .then((skill) => res.json(skill))
    .catch((e) => res.send(e))
})

router.patch('/v1/skills/:skill', (req, res) => {
  const skillId = req.params.skill
  const skill = req.body

  skillsController.setSkill(skillId, skill)
    .then((skill) => res.json(skill))
    .catch((e) => res.send(e))
})

router.get('/v1/skills/:skill/view-model', (req, res) => {
  const skillId = req.params.skill
  skillsController.getSkillViewModel(skillId)
    .then((skill) => res.json(skill))
    .catch((e) => res.send(e))
})

module.exports = router
