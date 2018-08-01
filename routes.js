const express = require('express')
const router = express.Router()
const user = require('./controller/users')
const game = require('./controller/game')

router.use('/users', user)
router.use('/game', game)

router.get('/', (req, res) => {
  res.status(200).res.send('online')
})
router.get('/health-check', (req, res) => {
  res.status(200).send('online')
})

module.exports = router
