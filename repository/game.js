var exports = module.exports
const admin = require('firebase-admin')
const db = admin.database()
const ref = db.ref('chess-battles-85633')
const matchMakingQue = ref.child('match-making-que')

exports.addToQue = (user) => {
  matchMakingQue.set(user)
}
