import React from 'react'
import ShipCard from './ShipCard'

function FleetShipDetails({fleet, handleDelete}) {
   
  return (
    <div>Hello
        {fleet.map(ship=><form><ShipCard ship={ship}/><button type="button" name="deleteShip" onClick={handleDelete}>Remove Ship From Squad</button></form>)}
    </div>
  )
}

export default FleetShipDetails