import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/measurements/'

const getAllMeasurements = () => {
  const request = axios.get(baseUrl)
  return request.then(res => res.data)
}

const deleteMeasurement = (id) => {
  const request = axios.delete(`${baseUrl}${id}`)
  return request.then(res => res.data)
}

const createMeasurement = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(res => res.data)
}

const updateMeasurement = (id, updatedAttribute) => {
  const request = axios.patch(`${baseUrl}${id}`, updatedAttribute)
  return request.then(res => res.data)
}

export default { getAllMeasurements, deleteMeasurement, createMeasurement, updateMeasurement }