const express = require('express')
const path = require('path')

const serverPath = path.resolve(process.cwd(), 'server')
const clientPath = path.resolve(process.cwd(), 'client')
const publicPath = path.resolve(process.cwd(), 'public')

const appPath = path.join(serverPath, 'app')
const mvcPath = path.join(appPath, 'mvc')
const apiPath = path.join(appPath, 'api')

const practicesController = require(path.join(mvcPath, 'controllers/practices'))
const profilesController = require(path.join(mvcPath, 'controllers/profiles'))
const usersController = require(path.join(mvcPath, 'controllers/users'))
const skillsController = require(path.join(mvcPath, 'controllers/skills'))

const Renderer = require('redux-routes-renderer').Renderer
const renderer = new Renderer()
const Routes = require(path.resolve(clientPath, 'app/routes')).Routes

const configureStore = require(path.resolve(clientPath, 'app/store')).configureStore

const store = configureStore()

const app = express()
const api = require(apiPath)

app.set('views', path.join(serverPath, 'app/mvc/views'))
app.set('view engine', 'html')
app.engine('html', require(path.join(serverPath, 'lib/express-hogan-cache')).createEngine())

app.use('/assets', express.static(path.join(publicPath, 'assets')))
app.use('/api', api)

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/react', function (req, res) {
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan', function (req, res) {
  res.render('hogan/index', { partials: { navigation: 'hogan/partials/navigation' } })
})

/*
 *  Practices
 */
app.get('/hogan/practices', function (req, res) {
  practicesController.getAllPractices()
    .then((practices) => {
      res.render('hogan/practices/index', { practices, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/practices/view-model', function (req, res) {
  practicesController.getAllPracticesViewModel()
    .then((practices) => {
      res.render('hogan/practices/index', { practices, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/practices/:practice', function (req, res) {
  const practice = req.params.practice
  practicesController.getPractice(practice)
    .then((practice) => {
      res.render('hogan/practices/practice', { practice, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/practices/:practice/view-model', function (req, res) {
  const practice = req.params.practice
  practicesController.getPracticeViewModel(practice)
    .then((practice) => {
      res.render('hogan/practices/practice', { practice, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Profiles
 */
app.get('/hogan/profiles', function (req, res) {
  profilesController.getAllProfiles()
    .then((profiles) => {
      res.render('hogan/profiles/index', { profiles, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/profiles/view-model', function (req, res) {
  profilesController.getAllProfilesViewModel()
    .then((profiles) => {
      res.render('hogan/profiles/index', { profiles, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/profiles/:profile', function (req, res) {
  const profile = req.params.profile
  profilesController.getProfile(profile)
    .then((profile) => {
      res.render('hogan/profiles/profile', { profile, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/profiles/:profile/view-model', function (req, res) {
  const profile = req.params.profile
  profilesController.getProfileViewModel(profile)
    .then((profile) => {
      res.render('hogan/profiles/profile', { profile, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Skills
 */
app.get('/hogan/skills', function (req, res) {
  skillsController.getAllSkills()
    .then((skills) => {
      res.render('hogan/skills/index', { skills, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/skills/view-model', function (req, res) {
  skillsController.getAllSkillsViewModel()
    .then((skills) => {
      res.render('hogan/skills/index', { skills, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/skills/:skill', function (req, res) {
  const skill = req.params.skill
  skillsController.getSkill(skill)
    .then((skill) => {
      res.render('hogan/skills/skill', { skill, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/skills/:skill/view-model', function (req, res) {
  const skill = req.params.skill
  skillsController.getSkillViewModel(skill)
    .then((skill) => {
      res.render('hogan/skills/skill', { skill, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

/*
 *  Users
 */
app.get('/hogan/users', function (req, res) {
  usersController.getAllUsers()
    .then((users) => {
      res.render('hogan/users/index', { users, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/users/view-model', function (req, res) {
  usersController.getAllUsersViewModel()
    .then((users) => {
      res.render('hogan/users/index', { users, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/users/:user', function (req, res) {
  const user = req.params.user
  usersController.getUser(user)
    .then((user) => {
      res.render('hogan/users/user', { user, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

app.get('/hogan/users/:user/view-model', function (req, res) {
  const user = req.params.user
  usersController.getUserViewModel(user)
    .then((user) => {
      res.render('hogan/users/user', { user, partials: { navigation: 'hogan/partials/navigation' } })
    })
    .catch((e) => res.send(e))
})

module.exports = {
  api,
  app
}
