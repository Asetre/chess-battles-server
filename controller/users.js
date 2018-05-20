const express = require('express')
const users = express.Router()
const userService = require('../service/users')

users.get('/login/:authID/:nickname', (req, res) => {
  const authID = req.params.authID
  const nickname = req.params.nickname

  return userService.getUserByAuthID(authID, nickname)
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = users
