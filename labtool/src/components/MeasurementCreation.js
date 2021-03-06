import React, { useState } from 'react'
import { Input, Button, Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { func } from 'prop-types'

import { createMeasurementAction } from '../reducer/measurementReducer'

const MeasurementCreation = ({ createMeasurement }) => {
  const [objectToSave, setObject] = useState({ name: '', unit: '', lowerbound: '', upperbound: '' })
  const [modalOpen, setModal] = useState(false)

  const handleSave = () => {
    createMeasurement(objectToSave)
    setObject({ name: '', unit: '', lowerbound: '', upperbound: '' })
    setModal(false)
  }

  const handleChange = (e, attr) => {
    e.preventDefault()
    setObject({ ...objectToSave, [attr]: e.target.value })
  }

  return (
    <>
      <Button fluid onClick={() => setModal(true)}> create a new measurement </Button>
      <Modal open={modalOpen} onClose={() => setModal(false)}>
        <Modal.Header> Create a new measurement</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group >
              <Form.Field
                id='name'
                value={objectToSave.name}
                width='3'
                label='Name'
                placeholder='Name...'
                control={Input}
                onChange={(e) => handleChange(e, 'name')}
              />
              <Form.Field
                id='unit'
                value={objectToSave.unit}
                width='2'
                label='Unit'
                placeholder='Unit...'
                control={Input}
                onChange={(e) => handleChange(e, 'unit')}
              />
              <Form.Field
                id='lowerbound'
                value={objectToSave.lowerbound}
                width='2'
                label='L bound'
                placeholder='Lower bound...'
                control={Input}
                onChange={(e) => handleChange(e, 'lowerbound')}
              />
              <Form.Field
                id='upperbound'
                value={objectToSave.upperbound}
                width='2'
                label='U bound'
                placeholder='Upper bound...'
                control={Input}
                onChange={(e) => handleChange(e, 'upperbound')}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => setModal(false)}
            negative
          >
            cancel
          </Button>
          <Button
            positive
            onClick={handleSave}
          >
            save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

MeasurementCreation.propTypes = {
  createMeasurement: func.isRequired
}

export default connect(null, { createMeasurement: createMeasurementAction })(MeasurementCreation)