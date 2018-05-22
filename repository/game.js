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
const newMatchRequestRef = matchMakingQueRef.push()

exports.addToMatchMakingQue = (user) => {
  console.log(user)
  return newMatchRequestRef.set(user)
}
