const express = require('express')
const game = express.Router()

const gameRepository = require('../repository/game')
const CreateGameService = require('../service/game')

let gameService = new CreateGameService()
gameService.initializeGameRepository(gameRepository)
gameService.startMatchingUsersInMatchMaking()

game.post('/findGame', (req, res) => {
  const matchMakingQueID = gameService.addToMatchMakingQueue(req.body)
  res.send(matchMakingQueID)
})

game.post('/cancelMatchMaking/:id', (req, res) => {
  try {
    gameRepository.removeFromMatchMakingQueue(req.params.id)
  }catch (err) {
    //eslint-disable-next-line
    console.log(err)
    res.status(500).send('An error ocurred ')
  }
  res.status(200).send('Removed from queue')
})

game.post('/over', (req, res) => {
  let data = req.body
  gameService.updateUserRecordsOnGameOver(data)
    .then(() => {
      res.send(200)
    })
    .catch((err) => {
      console.log(err)
      res.send(500)
    })
})

module.exports = game
