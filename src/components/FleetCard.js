import React from 'react'

function FleetCard({fleet}) {
    for (const property in fleet) {
        console.log(`${property}: ${fleet[property]}`);
      }

  return (
    <div>
        <h2>{fleet.fleet_name}</h2>
        <h3> Win Percentage: fleet.wins / fleet.losses</h3>
        <div className='shipsOfTheFleet'>
        <p> {fleet.ship_id}</p>
        <p> future image tages with fleet.ship and fleet.ship_name</p>
        <p> future image tages with fleet.ship and fleet.ship_name</p>
        <h3> remaining budget: fleet.budget</h3>
        </div>
    </div>
  )
}

export default FleetCard