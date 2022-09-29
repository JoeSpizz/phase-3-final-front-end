import React from 'react'
import ShipCard from './ShipCard'

function FleetShipDetails({fleet}) {

  return (
    <div>Hello
        {fleet.map(ship=><ShipCard ship={ship}/>)}
    </div>
  )
}

export default FleetShipDetails