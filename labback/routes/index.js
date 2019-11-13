const express = require('express')
const router = express.Router()

router.use('/api/v1/measurements', require('./routes'))

module.exports = router