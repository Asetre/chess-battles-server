const gameRepository = require('../repository')
var exports = module.exports

exports.addToMatchMakingQue = (user) => {
  return gameRepository.addToMatchMakingQue(user)
}
