import React, { useEffect } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getMeasurementsAction, deleteMeasurementAction, updateMeasurementAction } from '../reducer/measurementReducer'

const DataTable = ({ getMeasurements, deleteMeasurement, updateMeasurement, measurements }) => {

  useEffect(() => {
    getMeasurements()
  }, [getMeasurements])

  const handleDelete = (id) => {
    deleteMeasurement(id)
  }

  const handleUpdate = (id) => {
    updateMeasurement(id, { name: 'test worked again' })
  }


  const tableRows = measurements.map(row =>
    <Table.Row key={row.ID}>
      <Table.Cell>{row.ID}</Table.Cell>
      <Table.Cell>{row.name}</Table.Cell>
      <Table.Cell>{row.unit}</Table.Cell>
      <Table.Cell>{row.lowerbound}</Table.Cell>
      <Table.Cell>{row.upperbound}</Table.Cell>
      <Table.Cell>
        <Icon name='edit outline' onClick={() => handleUpdate(row.ID)} style={{ cursor: 'pointer' }} />
        <Icon name='trash alternate' onClick={() => handleDelete(row.ID)} style={{ cursor: 'pointer' }} />
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

const mapStateToProps = ({ measurements }) => ({
  measurements: measurements.data
})


export default connect(mapStateToProps,
  {
    getMeasurements: getMeasurementsAction,
    deleteMeasurement: deleteMeasurementAction,
    updateMeasurement: updateMeasurementAction
  })(DataTable)