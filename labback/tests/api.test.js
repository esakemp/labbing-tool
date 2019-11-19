const test = require('ava')
const Measurement = require('../services/measurement')

test.before(async () => {
  const db = await Measurement.getMeasurements()
  db.measurements.forEach(async (measurement) => await Measurement.deleteMeasurement(measurement.id))
  const measurementArray = [{
    name: 'Hemoglobiini',
    unit: 'g/l',
    lowerbound: '134',
    upperbound: '167'
  },
  {
    name: 'LDL-kolesteroli',
    unit: 'mmol/l',
    lowerbound: '0',
    upperbound: '3'
  }]

  measurementArray.forEach(async (measurement) => await Measurement.createMeasurement(measurement))
})

test.serial('Test api get', async t => {

  const expected = {
    measurements:
      [{
        id: 1,
        name: 'Hemoglobiini',
        unit: 'g/l',
        lowerbound: '134',
        upperbound: '167'
      },
      {
        id: 2,
        name: 'LDL-kolesteroli',
        unit: 'mmol/l',
        lowerbound: '0',
        upperbound: '3'
      }]
  }


  const response = await Measurement.getMeasurements()
  t.deepEqual(response, expected)
})

test.serial('Test api post', async t => {
  await Measurement.createMeasurement({ name: 'testimittaus', unit: 'mmol/g', lowerbound: '10', upperbound: '20' })
  const response = await Measurement.getMeasurements()
  t.deepEqual(response.measurements.length, 3)
})

test.serial('Test api patch', async t => {
  await Measurement.updateMeasurement(3, { name: 'patch test' })
  const response = await Measurement.getMeasurements()
  const testMeasurement = response.measurements[2]
  t.deepEqual(testMeasurement.name, 'patch test')
})

test.serial('Test api delete', async t => {
  await Measurement.deleteMeasurement(3)
  const response = await Measurement.getMeasurements()
  t.deepEqual(response.measurements.length, 2)
})