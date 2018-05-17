const express = require('express')
const users = express.Router()
const userService = require('../service/users')

users.get('/login', (req, res) => {
  res.send('test')
})

module.exports = users
