var exports = module.exports

module.exports = function (userRepository) {
  getUserByAuthID = (authID, nickname) => {
    return userRepository.getUserByAuthID(authID)
      .then(user => {
        if (!user) {
          return userRepository.createUser(authID, nickname)
        } else {
          return user
        }
      })
  }
}
