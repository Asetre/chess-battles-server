var exports = module.exports
const admin = require('firebase-admin')
const Users = require('../models')
const {firebaseUrl} = require('../config')
const serviceAccount = require('../chess-battles-85633-firebase-adminsdk-3hon0-fcb025e9f4.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseUrl
})
const db = admin.database()
const matchMakingQueueRef = db.ref('match-making-que')
const gamesRef = db.ref('games')

exports.addToMatchMakingQueue = (user) => {
  let newUserInMatchMakingQueue = {
    ...user,
    createdAt: new Date().toISOString()
  }

  const newMatchRequest = matchMakingQueueRef.push(user)
  const refId = newMatchRequest.getKey()

  return refId
}

exports.removeFromMatchMakingQueue = (id) => {
  return matchMakingQueueRef.child(id).remove()
}

exports.returnMatchMakingRef = () => {
  return matchMakingQueueRef
}

exports.returnGamesRef = () => {
  return gamesRef
}

exports.updateUserRecord = (data) => {
  return Users.findOne({_id: data._id})
    .then(user => {
      if(data.win) {
        user.win++
      }else {
        user.loss++
      }
      user.save()
    })
}
