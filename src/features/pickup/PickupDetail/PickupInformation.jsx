import React from 'react'
import { Segment } from 'semantic-ui-react'

const PickupInformation = ({pickup}) => {
  return (
    <Segment basic>
      <h3>City: {pickup.city}</h3>
      <h3>Venue: {pickup.venue}</h3>
    </Segment>
  )
}

export default PickupInformation
