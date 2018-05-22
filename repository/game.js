var exports = module.exports
const admin = require('firebase-admin')
const {firebaseUrl} = require('../config')
const serviceAccount = require('../chess-battles-85633-firebase-adminsdk-3hon0-fcb025e9f4.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseUrl
});
const db = admin.database()
const matchMakingQueRef = db.ref('match-making-que')
const gamesRef = db.ref('games')

exports.addToMatchMakingQue = (user) => {
  const newMatchRequest = matchMakingQueRef.push()
  const refId = newMatchRequest.getKey()

  newMatchRequest.push(user)
  matchUsers()
}

function matchUsers() {
  matchMakingQueRef.once('value', (snap) => {
    const usersInQue = snap.val()
    const usersInQueKeys = Object.keys(usersInQue)

    if(usersInQueKeys.length > 1 && usersInQueKeys.length !== 0) {
      usersInQueKeys.forEach((key, i) => {
        const user = usersInQue[key]
        const nextUser = usersInQue[usersInQueKeys[i + 1]]

        if(user && nextUser) {
          matchMakingQueRef.child(key).remove()
          matchMakingQueRef.child(usersInQueKeys[i+1]).remove()
          let newGame = gamesRef.push()

          const newGameInfo = {
            users: {
              0: nextUser,
              1: user
            },
            board: null,
            turn: 1,
            totalTurns: 0,
            winner: null
          }
          newGame.set(newGameInfo)
        }
      })
    }
  })
}
