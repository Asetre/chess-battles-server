const express = require('express')
const router = express.Router()
const user = require('./controller/users')
const game = require('./controller/game')

router.use('/users', user)
router.use('/game', game)

module.exports = router
