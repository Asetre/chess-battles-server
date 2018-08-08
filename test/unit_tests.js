const chai = require('chai')
const assert = chai.assert
const { startServer, closeServer } = require('../server.js')
const _userRepository = {
}
const userService = require('../service/users')

describe('User', function () {
  before(async function () {
    await startServer()
  })

  after(function () {
  })

  describe('User Service', function () {

    const user = {
      authID: 1,
      nickname: 'john.doe'
    }

    it('should getUserByAuthID', async function () {
    })

  })

})