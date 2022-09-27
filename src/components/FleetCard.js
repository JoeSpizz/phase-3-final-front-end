import React from 'react'

function FleetCard({fleet}) {

  return (
    <div>
        <h2> fleet.name</h2>
        <h3> Win Percentage: fleet.wins / fleet.losses</h3>
        <div className='shipsOfTheFleet'>
        <p> future image tages with fleet.ship and fleet.ship_name</p>
        <p> future image tages with fleet.ship and fleet.ship_name</p>
        <p> future image tages with fleet.ship and fleet.ship_name</p>
        <h3> remaining budget: fleet.budget</h3>
        </div>
    </div>
  )
}

export default FleetCard