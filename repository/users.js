var exports = module.exports
const Users = require('../models')

exports.getUserByAuthID = (authID) => {
  return Users.findOne({authID: authID})
  .then(user => {
    return user
  })
  .catch(err => {
    console.log(err)
  })
}

exports.createUser = (authID, nickname) => {
  const newUserInfo = {
    username: nickname,
    authID: authID,
    wins: 0,
    loss: 0
  }
  return Users.create(newUserInfo, (err, user) => {
    if(err) return err
    console.log(user)
    return user
  })
}
