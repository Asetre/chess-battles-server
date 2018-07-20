const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  authID: { type: String, required: true, unique: true },
  wins: { type: Number, required: true },
  loss: { type: Number, required: true }
})

//For future use
//eslint-disable-next-line
const gameSchema = new Schema({
  gameID: { type: String, required: true },
  createdAt: {type: Date, required: true},
  users: {type: Array, required: true}
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
