import React from 'react'

function ShipCard({ship}) {
   

  return (
    <div>
       
        <h1 id={ship.name}>{ship.name}</h1>
    <p> image of ship.image</p>
    <ul className="shipStats">
        <li>{ship.cost}</li>
        <li>{ship.atmoSpeed}</li>
        <li>ship.agility</li>
        <li>ship.power</li>
        <li>ship.armor</li>
        </ul>
        {/* in the future add a .Map of ship array to create select dropdown menu for add ship to specific ship */}
        </div>
  )
}

export default ShipCard