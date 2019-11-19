const express = require('express')
const router = express.Router()
const Test = require('../services/testservice')
const Measurement = require('../services/measurement')

router.post('/reset', async (req, res) => {
  try {
    const init_db = await Test.getInitDB()

    const result = await Measurement.getMeasurements()
    result.measurements.forEach(async measurement => {
      await Measurement.deleteMeasurement(measurement.id)
    })

    init_db.measurements.forEach(async measurement => {
      const { name, unit, lowerbound, upperbound } = measurement
      await Measurement.createMeasurement({ name, unit, lowerbound, upperbound })
    })


    res.status(200).json({ message: 'reset successful' })
  } catch (e) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router