import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Modal, Icon, Form, Input, Button } from 'semantic-ui-react'

import { updateMeasurementAction } from '../reducer/measurementReducer'

const MeasurementUpdate = ({ updateMeasurement, data }) => {
  const [updatedObject, setUpdated] = useState({})
  const [openModal, setModal] = useState(false)

  const handleUpdate = (id) => {
    updateMeasurement(id, updatedObject)
    setUpdated({})
    setModal(false)
  }

  const handleChange = (e, attr) => {
    setUpdated({ ...updatedObject, [attr]: e.target.value })
  }

  return (
    <>
      <Icon id='update' name='edit outline' style={{ cursor: 'pointer' }} onClick={() => setModal(true)} />
      <Modal open={openModal} onClose={() => setModal(false)}>
        <Modal.Header> Create a new measurement</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group >
              <Form.Field
                id='name'
                label='Name'
                defaultValue={data.name}
                width='3'
                control={Input}
                onChange={e => handleChange(e, 'name')}
              />
              <Form.Field
                id='unit'
                label='Unit'
                defaultValue={data.unit}
                width='2'
                control={Input}
                onChange={e => handleChange(e, 'unit')}
              />
              <Form.Field
                id='lowerbound'
                label='L bound'
                defaultValue={data.lowerbound}
                width='2'
                control={Input}
                onChange={e => handleChange(e, 'lowerbound')}
              />
              <Form.Field
                id='upperbound'
                label='U bound'
                defaultValue={data.upperbound}
                width='2'
                control={Input}
                onChange={e => handleChange(e, 'upperbound')}
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
            onClick={() => handleUpdate(data.id)}
          >
            save
        </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default connect(null, { updateMeasurement: updateMeasurementAction })(MeasurementUpdate)