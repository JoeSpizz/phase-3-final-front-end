import React from 'react'

function ShipCard({ship}) {

  return (
    <div><h1>ship.name</h1>
    <p> image of ship.image</p>
    <ul classname="shipStats">
        <li>ship.cost</li>
        <li>ship.speed</li>
        <li>ship.agility</li>
        <li>ship.power</li>
        <li>ship.armor</li>
        </ul>
        </div>
  )
}

export default ShipCard