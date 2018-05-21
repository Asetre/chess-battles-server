const express = require('express')
const game = express.Router()
const gameService = require('../service/game')

game.get('/findGame', (req, res) => {
  const user = req.user
  gameService.addToMatchMakingQue(user)
  res.send('hello world')
})
