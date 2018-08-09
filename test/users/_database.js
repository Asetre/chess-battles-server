class Database {
  constructor() {
    this.db = [
      {
        authID: 1,
        nickname: 'john.doe'
      }
    ]
  }

  findUserByAuthID(authID) {
    return this.db.find((user) => {
      return user.authID === authID
    })
  }

  createUser(authID, nickname) {
    let newUser = {
      authID,
      nickname
    }

    this.db.push(newUser)
  }

  reset() {
    this.db = [
      {
        authID: 1,
        nickname: 'john.doe'
      }
    ]
  }
}

module.exports = new Database