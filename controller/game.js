const express = require('express')
const game = express.Router()
const gameService = require('../service/game')

game.post('/findGame', (req, res) => {
  const user = req.user
  gameService.addToMatchMakingQue(user)
  console.log('controller')
  res.send('hello world')
})

module.exports = game
