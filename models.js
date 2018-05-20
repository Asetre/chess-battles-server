const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true},
  authID: {type: String, required: true, unique: true},
  wins: {type: Number, required: true},
  loss: {type: Number, required: true}
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
