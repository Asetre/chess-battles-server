const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, unique: true},
  authID: {type: String, required: true, unique: true},
  wins: {type: Number},
  loss: {type: Number}
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
