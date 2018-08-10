const chai = require('chai')
const assert = chai.assert
const { startServer, closeServer } = require('../../server.js')
const _database = require('./_database')

const CreateRepository = require('./_repository')
const CreateUserService = require('../../service/users')

const userService = new CreateUserService()
const userRepository = new CreateRepository()

describe('User Unit tests', function () {
  before(async function () {
    await startServer()
  })

  after(async function () {
    await closeServer()
  })

  describe('User Service', function () {
    before(function() {
      userRepository.initializeDB(_database)
      userService.initializeUserRepository(userRepository)
    })

    beforeEach(function() {
      _database.reset()
    })

    it('should getUserByAuthID', async function () {
      let testUser = _database.db[0]
      let {authID, nickname} = testUser
      let foundUser = await userService.getUserByAuthID(authID, nickname)
      assert.equal(testUser, foundUser)
    })

    it('should create a new user if authID is not found', async function() {
      let newUser = {
        authID: 2,
        nickname: 'fizzBuzz'
      }
      await userService.getUserByAuthID(newUser.authID, newUser.nickname)
      let foundUser = _database.findUserByAuthID(newUser.authID)

      assert.deepEqual(newUser, foundUser)
    })
  })

})