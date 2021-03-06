import React, { useEffect } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { arrayOf, shape, func } from 'prop-types'

import MeasurementUpdate from './MeasurementUpdate'
import { getMeasurementsAction, deleteMeasurementAction } from '../reducer/measurementReducer'

const DataTable = ({ getMeasurements, deleteMeasurement, measurements }) => {

  useEffect(() => {
    getMeasurements()
  }, [])

  const handleDelete = (id) => {
    deleteMeasurement(id)
  }

  const tableRows = measurements.map(row =>
    <Table.Row key={row.id}>
      <Table.Cell>{row.id}</Table.Cell>
      <Table.Cell>{row.name}</Table.Cell>
      <Table.Cell>{row.unit}</Table.Cell>
      <Table.Cell>{row.lowerbound}</Table.Cell>
      <Table.Cell>{row.upperbound}</Table.Cell>
      <Table.Cell>
        <MeasurementUpdate data={row}></MeasurementUpdate>
        <Icon id='delete' name='trash alternate' onClick={() => handleDelete(row.id)} style={{ cursor: 'pointer' }} />
      </Table.Cell>
    </Table.Row>)

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Unit</Table.Cell>
          <Table.Cell>Lower Bound</Table.Cell>
          <Table.Cell>Upper Bound</Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{tableRows}</Table.Body>
    </Table>)
}

DataTable.propTypes = {
  measurements: arrayOf(shape({})).isRequired,
  getMeasurements: func.isRequired,
  deleteMeasurement: func.isRequired
}

const mapStateToProps = ({ measurements }) => ({
  measurements: measurements.data,
})


export default connect(mapStateToProps, {
  getMeasurements: getMeasurementsAction,
  deleteMeasurement: deleteMeasurementAction
})(DataTable)