const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const {port, databaseUrl} = require('./config')
const bodyParser = require('body-parser')

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
})

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
