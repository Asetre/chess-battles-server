const chai = require('chai')
const assert = chai.assert
const { startServer, closeServer } = require('../server.js')
const userService = require('../service/users')(_userRepository)

describe('User', function () {
  before(async function () {
    await startServer()
  })

  after(function () {
  })

  describe('User Service', function () {
    it('should getUserByAuthID', function () {
      userService.getUserByAuthID()
    })

    it('should create a new user', function() {
    })
  })

})