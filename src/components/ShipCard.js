import React from 'react'

function ShipCard({fleet}) {
   
function addShip(e){
    e.preventDefault()
    console.log(e.target.name)
    // POST ship data to Fleet DB
}

  return (
    <div>
        <form onSubmit={addShip} name={fleet.id}>
        <h1 id={fleet.name}>{fleet.name}</h1>
    <p> image of ship.image</p>
    <ul className="shipStats">
        <li>{fleet.cost}</li>
        <li>{fleet.atmoSpeed}</li>
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