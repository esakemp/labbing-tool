import measurementService from '../service/measurementService'

export const getMeasurementsAction = () => {
  return async dispatch => {
    const res = await measurementService.getAllMeasurements()
    await dispatch({
      type: 'GET_MEASUREMENTS',
      data: res.measurements
    })
  }
}

export const deleteMeasurementAction = (id) => {
  return async dispatch => {
    const res = await measurementService.deleteMeasurement(id)
    await dispatch({
      type: 'DELETE_MEASUREMENT',
      data: res.measurements
    })
  }
}

export const createMeasurementAction = (object) => {
  return async dispatch => {
    const res = await measurementService.createMeasurement(object)
    await dispatch({
      type: 'CREATE_MEASUREMENT',
      data: res.measurements
    })
  }
}

export const updateMeasurementAction = (id, updatedAttribute) => {
  return async dispatch => {
    const res = await measurementService.updateMeasurement(id, updatedAttribute)
    await dispatch({
      type: 'UPDATE_MEASUREMENT',
      data: res.measurements
    })
  }
}

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'GET_MEASUREMENTS':
      return {
        ...state,
        data: action.data
      }
    case 'DELETE_MEASUREMENT':
      return {
        ...state,
        data: action.data
      }
    case 'CREATE_MEASUREMENT':
      return {
        ...state,
        data: action.data
      }
    case 'UPDATE_MEASUREMENT':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export default reducer