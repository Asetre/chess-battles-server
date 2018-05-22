const express = require('express')
const game = express.Router()
const gameService = require('../service/game')

game.post('/findGame', (req, res) => {
  gameService.addToMatchMakingQue(req.body)
  res.send('hello world')
})

module.exports = game
