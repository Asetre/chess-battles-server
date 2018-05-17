const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')
const {port} = require('./config')

app.use(routes)

const startServer = () => {
  console.log(`Server is running on port: ${port}`)
}
