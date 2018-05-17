const express = require('express')
const router = express.Router()
const user = require('./controller/users')

router.use('/users', user)

module.exports = router
