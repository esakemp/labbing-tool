const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'test') {
  app.use(require('./routes/indexTesting'))
} else {
  app.use(require('./routes/index'))
}

app.listen('3001')