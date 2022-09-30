import React from 'react'
import ShipCard from './ShipCard'

function FleetShipDetails({fleet, handleDelete}) {
   
  return (
    <div className="fleetContainer">
        {fleet.map(ship=><form ><ShipCard ship={ship}/><button type="button" name="deleteShip" onClick={handleDelete} className='fullFleetBtn'>Remove Ship From Squad</button></form>)}
    </div>
  )
}

export default FleetShipDetails