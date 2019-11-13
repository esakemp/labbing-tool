const express = require('express')
const router = express.Router()
const Measurement = require('../models/measurement')

// get all measurements
router.get('/', async (req, res) => {
    try {
        const result = await Measurement.getMeasurements()
        res.status(200).json(result)
    } catch (e) {
        if (e.status) {
            res.status(e.status).json({ message: e.message })
        }
        res.status(500).json({ message: e.message })
    }
})

// create new measurement
router.post('/', async (req, res) => {
    try {
        await Measurement.createMeasurement(req.body)
        const result = await Measurement.getMeasurements()
        res.status(200).json(result)
    } catch (e) {
        if (e.status) {
            res.status(e.status).json({ message: e.message })
        }
        res.status(500).json({ message: e.message })
    }
})

// update measurement
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Measurement.updateMeasurement(id, req.body)
        const result = await Measurement.getMeasurements()

        res.status(200).json(result)
    } catch (e) {
        if (e.status) {
            res.status(e.status).json({ message: e.message })
        }
        res.status(500).json({ message: e.message })
    }
})

// remove measurement
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Measurement.deleteMeasurement(id)
        const result = await Measurement.getMeasurements()

        res.status(200).json(result)
    } catch (e) {
        if (e.status) {
            res.status(e.status).json({ message: e.message })
        }
        res.status(500).json({ message: e.message })
    }
})

module.exports = router