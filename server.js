const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const {port, databaseUrl} = require('./config')
const bodyParser = require('body-parser')

app.use(bodyParser)
app.use(routes)


var server

const closeServer = () => {
  console.log('Disconnecting from database')
  mongoose.disconnect()
  .then(() => {
    server.close()
    console.log('Server closed...')
  })
  .catch(err => {
    console.log(err)
    console.log('Was unable to gracefully shut down')
  })
}

const startServer = () => {
  mongoose.connect(databaseUrl)
  .then(() => {
    console.log('Connected to database')
    server = app.listen(port, () => {
      console.log(`Server is running on port: ${port}...`)
    })
  })
  .catch(err => {
    console.log(err)
  })
}


if(require.main === module) {
  startServer()
}

module.exports = {startServer, closeServer}
