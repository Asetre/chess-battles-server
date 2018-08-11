var exports = module.exports
const Users = require('../models')

exports.getUserByAuthID = (authID) => {
  return Users.findOne({ authID: authID })
    .then(user => {
      return user
    })
}

exports.createUser = (authID, nickname) => {
  const newUserInfo = {
    username: nickname,
    authID: authID,
    wins: 0,
    loss: 0,
    createdAt: new Date().toISOString(),
    gameHistory: []
  }

  return Users.create(newUserInfo, (err, user) => {
    if (err) return err
    return user
  })
}

exports.updateUserWinLoss = () => {
}
