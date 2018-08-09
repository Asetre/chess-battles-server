module.exports = function (_database) {
  return {
    getUserByAuthID: (authID) => {
      return new Promise((resolve) => {
        let user = _database.findUserByAuthID(authID)
        resolve(user)
      })
    },
    createUser: (authID, nickname) => _database.createUser(authID, nickname)
  }
}