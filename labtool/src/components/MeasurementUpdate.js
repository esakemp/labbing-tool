import React from 'react'
import { connect } from 'react-redux'

import { updateMeasurementAction } from '../reducer/measurementReducer'

const MeasurementUpdate = ({ updateMeasurement }) => {

  return <div>update</div>
}

export default connect(null, { updateMeasurement: updateMeasurementAction })(MeasurementUpdate)