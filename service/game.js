const gameRepository = require('../repository/game')
var exports = module.exports

exports.addToMatchMakingQue = (user) => {
  console.log('service')
  return gameRepository.addToMatchMakingQue(user)
}
