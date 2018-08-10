const CreateGameService = require('../../service/game')
const _gameRepository = require('./_repository')
const { startServer, closeServer } = require('../../server.js')

const gameService = new CreateGameService()

describe('Game Unit Tests', function() {
  before(async function() {
    await startServer()
  })
  after(async function() {
    await closeServer()
  })

  describe('Game Service', function() {
    before(function() {
      gameService.initializeGameRepository(_gameRepository)
    })

    it('should addToMatchMakingQueue', function() {
      let userToAdd = {

      }

      gameService.addToMatchMakingQueue()
    })
  })
})