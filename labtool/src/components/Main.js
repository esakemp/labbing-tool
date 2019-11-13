import React from 'react'
import { Header, Container } from 'semantic-ui-react'

import DataTable from './DataTable'
import MeasurementCreation from './MeasurementCreation'

const Main = () => {
  return (
    <div padding='30px'>
      <Header align='center' style={{ padding: '20px' }}>Labtool</Header>
      <Container>
        <MeasurementCreation />
        <DataTable />
      </Container>
    </div>
  )
}

export default Main