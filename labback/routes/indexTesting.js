const express = require('express')
const router = express.Router()

router.use('/api/v1/measurements', require('./routes'))
router.use('/api/v1/testing', require('./testroute'))

module.exports = router