const express = require('express')
const path = require('path')
const app = express()

const serverPath = path.resolve(process.cwd(), 'server')

app.set('views', path.join(serverPath, 'app/views'))
app.set('view engine', 'html')
app.engine('html', require(path.join(serverPath, 'lib/express-hogan-cache')).createEngine())

const practicesController = require(path.join(serverPath, 'app/controllers/practices'))
const profilesController = require(path.join(serverPath, 'app/controllers/profiles'))
const usersController = require(path.join(serverPath, 'app/controllers/users'))
const skillsController = require(path.join(serverPath, 'app/controllers/skills'))

app.get('/', function (req, res) {
  res.render('index', { partials: { navigation: 'partials/navigation' } })
})

/*
 *  Practices
 */
app.get('/practices', function (req, res) {
  practicesController.getAllPractices()
    .then((practices) => {
      res.render('practices/index', { practices, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/practices/view-model', function (req, res) {
  practicesController.getAllPracticesViewModel()
    .then((practices) => {
      res.render('practices/index', { practices, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/practices/:practice', function (req, res) {
  const practice = req.params.practice
  practicesController.getPractice(practice)
    .then((practice) => {
      res.render('practices/practice', { practice, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/practices/:practice/view-model', function (req, res) {
  const practice = req.params.practice
  practicesController.getPracticeViewModel(practice)
    .then((practice) => {
      res.render('practices/practice', { practice, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Profiles
 */
app.get('/profiles', function (req, res) {
  profilesController.getAllProfiles()
    .then((profiles) => {
      res.render('profiles/index', { profiles, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/profiles/view-model', function (req, res) {
  profilesController.getAllProfilesViewModel()
    .then((profiles) => {
      res.render('profiles/index', { profiles, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/profiles/:profile', function (req, res) {
  const profile = req.params.profile
  profilesController.getProfile(profile)
    .then((profile) => {
      res.render('profiles/profile', { profile, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/profiles/:profile/view-model', function (req, res) {
  const profile = req.params.profile
  profilesController.getProfileViewModel(profile)
    .then((profile) => {
      res.render('profiles/profile', { profile, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Skills
 */
app.get('/skills', function (req, res) {
  skillsController.getAllSkills()
    .then((skills) => {
      res.render('skills/index', { skills, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/skills/view-model', function (req, res) {
  skillsController.getAllSkillsViewModel()
    .then((skills) => {
      res.render('skills/index', { skills, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/skills/:skill', function (req, res) {
  const skill = req.params.skill
  skillsController.getSkill(skill)
    .then((skill) => {
      res.render('skills/skill', { skill, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/skills/:skill/view-model', function (req, res) {
  const skill = req.params.skill
  skillsController.getSkillViewModel(skill)
    .then((skill) => {
      res.render('skills/skill', { skill, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Users
 */
app.get('/users', function (req, res) {
  usersController.getAllUsers()
    .then((users) => {
      res.render('users/index', { users, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/users/view-model', function (req, res) {
  usersController.getAllUsersViewModel()
    .then((users) => {
      res.render('users/index', { users, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/users/:user', function (req, res) {
  const user = req.params.user
  usersController.getUser(user)
    .then((user) => {
      res.render('users/user', { user, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/users/:user/view-model', function (req, res) {
  const user = req.params.user
  usersController.getUserViewModel(user)
    .then((user) => {
      res.render('users/user', { user, partials: { navigation: 'partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

module.exports = app
