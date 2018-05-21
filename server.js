const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const {port, databaseUrl, firebaseUrl} = require('./config')
const bodyParser = require('body-parser')

const admin = require('firebase-admin');
const serviceAccount = require('./chess-battles-85633-firebase-adminsdk-3hon0-fcb025e9f4.json');

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

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: firebaseUrl
    });
  })
  .then(() => {
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
