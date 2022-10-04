import React from 'react'
import ShipCard from './ShipCard'

function FleetShipDetails({ship, handleDelete}) {
   
  return (
    <div className="fleetContainer" >
       <form >
           <ShipCard ship={ship}/>
           <button type="button" name="deleteShip" onClick={handleDelete} className='deleteShipBtn'>Remove Ship From Squad</button>
           </form>
    </div>
  )
}

export default FleetShipDetails