const path = require('path')

const express = require('express')

const router = express.Router()

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')

const mvcPath = path.join(serverPath, 'app/mvc')

const practicesController = require(path.join(mvcPath, 'controllers/practices'))
const profilesController = require(path.join(mvcPath, 'controllers/profiles'))
const usersController = require(path.join(mvcPath, 'controllers/users'))
const skillsController = require(path.join(mvcPath, 'controllers/skills'))

router.get('/', (req, res) => {
  res.render('hogan/index', { partials: { navigation: 'hogan/partials/navigation' } })
})

/*
 *  Practices
 */
router.get('/practices', (req, res) => {
  practicesController.getAllPractices()
    .then((practices) => {
      res.render('hogan/practices/index', { practices, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/practices/view-model', (req, res) => {
  practicesController.getAllPracticesViewModel()
    .then((practices) => {
      res.render('hogan/practices/index', { practices, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/practices/:practice', (req, res) => {
  const practice = req.params.practice
  practicesController.getPractice(practice)
    .then((practice) => {
      res.render('hogan/practices/practice', { practice, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/practices/:practice/view-model', (req, res) => {
  const practice = req.params.practice
  practicesController.getPracticeViewModel(practice)
    .then((practice) => {
      res.render('hogan/practices/practice', { practice, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Profiles
 */
router.get('/profiles', (req, res) => {
  profilesController.getAllProfiles()
    .then((profiles) => {
      res.render('hogan/profiles/index', { profiles, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/profiles/view-model', (req, res) => {
  profilesController.getAllProfilesViewModel()
    .then((profiles) => {
      res.render('hogan/profiles/index', { profiles, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/profiles/:profile', (req, res) => {
  const profile = req.params.profile
  profilesController.getProfile(profile)
    .then((profile) => {
      res.render('hogan/profiles/profile', { profile, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/profiles/:profile/view-model', (req, res) => {
  const profile = req.params.profile
  profilesController.getProfileViewModel(profile)
    .then((profile) => {
      res.render('hogan/profiles/profile', { profile, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Skills
 */
router.get('/skills', (req, res) => {
  skillsController.getAllSkills()
    .then((skills) => {
      res.render('hogan/skills/index', { skills, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/skills/view-model', (req, res) => {
  skillsController.getAllSkillsViewModel()
    .then((skills) => {
      res.render('hogan/skills/index', { skills, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/skills/:skill', (req, res) => {
  const skill = req.params.skill
  skillsController.getSkill(skill)
    .then((skill) => {
      res.render('hogan/skills/skill', { skill, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/skills/:skill/view-model', (req, res) => {
  const skill = req.params.skill
  skillsController.getSkillViewModel(skill)
    .then((skill) => {
      res.render('hogan/skills/skill', { skill, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Users
 */
router.get('/users', (req, res) => {
  usersController.getAllUsers()
    .then((users) => {
      res.render('hogan/users/index', { users, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/users/view-model', (req, res) => {
  usersController.getAllUsersViewModel()
    .then((users) => {
      res.render('hogan/users/index', { users, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/users/:user', (req, res) => {
  const user = req.params.user
  usersController.getUser(user)
    .then((user) => {
      res.render('hogan/users/user', { user, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/users/:user/view-model', (req, res) => {
  const user = req.params.user
  usersController.getUserViewModel(user)
    .then((user) => {
      res.render('hogan/users/user', { user, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => {
      res.send(e)
    })
})

module.exports = router
