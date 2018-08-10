module.exports = class CreateGameService {
  constructor() {
    this.gameRepository = null
    this.matchMakingInterval = null

    this.matchUsersInQeue = this.matchUsersInQeue.bind(this)
  }

  stopMatchingusersInMatchMaking() {
    clearInterval(this.matchMakingInterval)
  }

  startMatchingUsersInMatchMaking() {
    this.matchMakingInterval = setInterval(this.matchUsersInQeue, 5000)
  }

  initializeGameRepository(gameRepository) {
    this.gameRepository = gameRepository
  }

  addToMatchMakingQueue(user) {
    let queID = this.gameRepository.addToMatchMakingQue(user)
    return queID
  }

  updateUserRecordsOnGameOver(data) {
    let userRecordsToUpdate = [
      this.gameRepository.updateUserRecord({ _id: data.winner, win: true }),
      this.gameRepository.updateUserRecord({ _id: data.loser, win: false })
    ]
    return Promise.all(userRecordsToUpdate)
  }

  matchUsersInQeue() {
    let matchMakingQueueRef = this.gameRepository.returnMatchMakingRef()
    let gamesRef = this.gameRepository.returnGamesRef()

    matchMakingQueueRef.once('value', (snap) => {
      let usersInQueue = snap.val()

      if(!usersInQueue) return 

      let usersInQueueKeys = Object.keys(usersInQueue)
      if (usersInQueKeys.length > 1 && usersInQueKeys.length !== 0) {
        usersInQueKeys.forEach((key, i) => {
          const user = usersInQue[key]
          const nextUser = usersInQue[usersInQueKeys[i + 1]]

          if (user && nextUser) {
            let newGame = gamesRef.push()
            let newGameID = newGame.getKey()

            matchMakingQueRef.child(key).update({
              matchFound: true,
              gameID: newGameID
            })

            matchMakingQueRef.child(usersInQueKeys[i + 1]).update({
              matchFound: true,
              gameID: newGameID
            })

            const newGameInfo = {
              users: {
                0: nextUser,
                1: user
              },
              turn: 1,
              totalTurns: 0,
            }

            newGame.set(newGameInfo)
          }
        })
      }
    })
  }
}
