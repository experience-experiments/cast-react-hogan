const express = require('express')

const router = express.Router()

const usersController = require('../controllers/users')

router.get('/api/users', (req, res) => {
  usersController.getAllUsers()
    .then((users) => res.json(users))
    .catch((e) => res.send('Bang'))
})

router.get('/api/users/:user', (req, res) => {
  const userId = req.params.user
  usersController.getUser(userId)
    .then((user) => res.json(user))
    .catch((e) => res.send('Bang'))
})
