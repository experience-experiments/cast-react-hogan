const express = require('express')

const router = express.Router()

const practicesController = require('../controllers/practices')
const profilesController = require('../controllers/profiles')
const skillsController = require('../controllers/skills')
const usersController = require('../controllers/users')

router.get('/api/users', (req, res) => {
  usersController.getAllUsers()
    .then((users) => res.json(users))
    .catch((e) => res.send(e))
})

router.get('/api/users/:user', (req, res) => {
  const userId = req.params.user
  usersController.getUser(userId)
    .then((user) => res.json(user))
    .catch((e) => res.send(e))
})

router.get('/api/users/view-model', (req, res) => {
  usersController.getAllUsersViewModel()
    .then((users) => res.json(users))
    .catch((e) => res.send(e))
})

router.get('/api/users/:user/view-model', (req, res) => {
  const userId = req.params.user
  usersController.getUserViewModel(userId)
    .then((user) => res.json(user))
    .catch((e) => res.send(e))
})

router.get('/api/practices', (req, res) => {
  practicesController.getAllPractices()
    .then((practices) => res.json(practices))
    .catch((e) => res.send(e))
})

router.get('/api/practices/:practice', (req, res) => {
  const practiceId = req.params.practice
  practicesController.getPractice(practiceId)
    .then((practice) => res.json(practice))
    .catch((e) => res.send(e))
})

router.get('/api/practices/view-model', (req, res) => {
  practicesController.getAllPracticesViewModel()
    .then((practices) => res.json(practices))
    .catch((e) => res.send(e))
})

router.get('/api/practices/:practice/view-model', (req, res) => {
  const practiceId = req.params.practice
  practicesController.getPracticeViewModel(practiceId)
    .then((practice) => res.json(practice))
    .catch((e) => res.send(e))
})

router.get('/api/profiles', (req, res) => {
  profilesController.getAllProfiles()
    .then((profiles) => res.json(profiles))
    .catch((e) => res.send(e))
})

router.get('/api/profiles/:profile', (req, res) => {
  const profileId = req.params.profile
  profilesController.getProfile(profileId)
    .then((profile) => res.json(profile))
    .catch((e) => res.send(e))
})

router.get('/api/profiles/view-model', (req, res) => {
  profilesController.getAllProfilesViewModel()
    .then((profiles) => res.json(profiles))
    .catch((e) => res.send(e))
})

router.get('/api/profiles/:profile/view-model', (req, res) => {
  const profileId = req.params.profile
  profilesController.getProfileViewModel(profileId)
    .then((profile) => res.json(profile))
    .catch((e) => res.send(e))
})

router.get('/api/skills', (req, res) => {
  skillsController.getAllSkills()
    .then((skills) => res.json(skills))
    .catch((e) => res.send(e))
})

router.get('/api/skills/:skill', (req, res) => {
  const skillId = req.params.skill
  skillsController.getSkill(skillId)
    .then((skill) => res.json(skill))
    .catch((e) => res.send(e))
})

router.get('/api/skills/view-model', (req, res) => {
  skillsController.getAllSkillsViewModel()
    .then((skills) => res.json(skills))
    .catch((e) => res.send(e))
})

router.get('/api/skills/:skill/view-model', (req, res) => {
  const skillId = req.params.skill
  skillsController.getSkillViewModel(skillId)
    .then((skill) => res.json(skill))
    .catch((e) => res.send(e))
})
