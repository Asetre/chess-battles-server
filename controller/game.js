const express = require('express')
const game = express.Router()
const gameService = require('../service/game')

game.post('/findGame', (req, res) => {
    const matchMakingQueID = gameService.addToMatchMakingQue(req.body)
    res.send(matchMakingQueID)
})

game.post('/cancelMatchMaking/:id', (req, res) => {
    gameService.removeFromMatchMakingQue(req.params.id)
    res.send('goodbye world')
})

module.exports = game
