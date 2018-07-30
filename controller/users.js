const express = require('express')
const users = express.Router()
const userService = require('../service/users')

users.get('/login/:authID/:nickname', (req, res) => {
  const authID = req.params.authID
  const nickname = req.params.nickname

  return userService.getUserByAuthID(authID, nickname)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
})

users.get('/test', (req, res) => {
  res.send('test')
})

module.exports = users
