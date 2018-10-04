import React from 'react'
import { Segment, List, Image } from 'semantic-ui-react'

const PickupRegisteredPlayers = ({ pickup, auth}) => {
  console.log(pickup.attendees)
  return (
    <Segment basic>
      <h1 style={{fontSize: '2em'}}>registered players</h1>
      {/* <List>
        {Object.keys(pickup.attendees).map(key => {
          return <List.Item>
            <Image avatar src={pickup.attendees.key.photoURL || `https://api.adorable.io/avatars/80/${key.uid}.png`} />
            <h4>pickup.attendees.key.displayName</h4>
          </List.Item>
        })}
      </List> */}
    </Segment>
  )
}

export default PickupRegisteredPlayers
