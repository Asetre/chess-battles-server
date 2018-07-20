const gameRepository = require('../repository/game')
var exports = module.exports

exports.addToMatchMakingQue = (user) => {
  return gameRepository.addToMatchMakingQue(user)
}

exports.removeFromMatchMakingQue = (id) => {
  return gameRepository.removeFromMatchMakingQue(id)
}

exports.updateUserRecordsOnGameOver = (data) => {
  let userRecordsToUpdate = [
    gameRepository.updateUserRecord({ _id: data.winner, win: true }),
    gameRepository.updateUserRecord({ _id: data.loser, win: false })
  ]
  return Promise.all(userRecordsToUpdate)
}
