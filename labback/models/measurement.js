let db = require('../data/db.json')
const filename = './data/db.json'
const middleware = require('../middlewares/middleware.js')

const getMeasurements = () => {
  return new Promise((resolve, reject) => {
    resolve(db)
  })
}

const createMeasurement = (newMeasurement) => {
  return new Promise((resolve, reject) => {
    const id = middleware.getNewId()
    db.measurements.push({ id, ...newMeasurement })
    middleware.writeJSONFile(filename, db)
    resolve(newMeasurement)
  })
}

const updateMeasurement = (id, updatedAttribute) => {
  return new Promise((resolve, reject) => {
    const index = db.measurements.findIndex(m => m.id == id)
    db.measurements[index] = { ...db.measurements[index], ...updatedAttribute }
    middleware.writeJSONFile(filename, db)
    resolve(db.measurements[index])
  })
}

const deleteMeasurement = (id) => {
  return new Promise((resolve, reject) => {
    db.measurements = db.measurements.filter(p => Number(p.id) !== Number(id))
    middleware.writeJSONFile(filename, db)
    resolve()
  })
}

module.exports = {
  getMeasurements,
  createMeasurement,
  updateMeasurement,
  deleteMeasurement
}