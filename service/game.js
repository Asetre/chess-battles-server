const gameRepository = require('../repository/game')
var exports = module.exports

exports.addToMatchMakingQue = (user) => {
  return gameRepository.addToMatchMakingQue(user)
}
