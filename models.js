const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, unique: true},
  authID: {type: string, required: true, unique: true},
  wins: {type: Number},
  loss: {type: Number}
})

const User = mongoose.model('User', userSchema)

module.exports = User
