import React from 'react'

function ShipCard({ship, addShip}) {
   


  return (
    <div>
        <form onSubmit={addShip} name={ship.id}>
        <h1 id={ship.name}>{ship.name}</h1>
    <p> image of ship.image</p>
    <ul className="shipStats">
        <li>{ship.cost}</li>
        <li>{ship.atmoSpeed}</li>
        <li>ship.agility</li>
        <li>ship.power</li>
        <li>ship.armor</li>
        </ul>
        {/* in the future add a .Map of fleet array to create select dropdown menu for add ship to specific fleet */}
        <button type="submit">Add to Fleet</button>
        </form>
        </div>
  )
}

export default ShipCard