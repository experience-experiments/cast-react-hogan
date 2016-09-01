const path = require('path')
const express = require('express')

const router = express.Router()

const processCwd = process.cwd()
const serverPath = path.resolve(processCwd, 'server')
const clientPath = path.resolve(processCwd, 'client')
const publicPath = path.resolve(processCwd, 'public')

const mvcPath = path.join(serverPath, 'app/mvc')

const practicesController = require(path.join(mvcPath, 'controllers/practices'))
const profilesController = require(path.join(mvcPath, 'controllers/profiles'))
const usersController = require(path.join(mvcPath, 'controllers/users'))
const skillsController = require(path.join(mvcPath, 'controllers/skills'))

const {
  Renderer
} = require('redux-routes-renderer')

const {
  Routes
} = require(path.resolve(clientPath, 'app/routes'))

const {
  configureStore
} = require(path.resolve(clientPath, 'app/store'))

const renderer = new Renderer()

router.get('/', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Practices
 */
router.get('/practices', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/practices/:practice', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Profiles
 */
router.get('/profiles', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/profiles/:profile', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Skills
 */
router.get('/skills', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/skills/:skill', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

/*
 *  Users
 */
router.get('/users', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

router.get('/users/:user', (req, res) => {
  const store = configureStore()
  renderer.render(store, Routes, req.url)
    .then((o) => {
      if (o.redirect) return res.redirect(o.redirect.pathname + o.redirect.search)
      res.render('react/index', { app: o.rendered, state: JSON.stringify(o.state) })
    })
    .catch((e) => {
      res.send(e)
    })
})

module.exports = router
