module.exports = class CreateRepository {
  initializeDB(db) {
    this._database = db
  }

  getUserByAuthID(authID) {
    return new Promise((resolve) => {
      let user = this._database.findUserByAuthID(authID)
      resolve(user)
    })
  }

  createUser(authID, nickname) {
    return this._database.createUser(authID, nickname)
  }
}